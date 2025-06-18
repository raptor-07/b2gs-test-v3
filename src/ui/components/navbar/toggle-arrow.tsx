"use client";

import React from "react";
import { motion } from "motion/react";
import { NavColorScheme } from "@/ui/hooks/useBackgroundAwareNavbar";
import { Z_INDEX } from "@/utils/z-index";

// Constants for layout
const NAVBAR_HEIGHT = 80;
const ARROW_MARGIN = 20;

const positions = {
  navbarVisible: NAVBAR_HEIGHT + ARROW_MARGIN,
  navbarHidden: ARROW_MARGIN,
};

interface ToggleArrowProps {
  isNavVisible: boolean;
  colorScheme: NavColorScheme;
  onToggle: () => void;
}

export const ToggleArrow: React.FC<ToggleArrowProps> = ({
  isNavVisible,
  colorScheme,
  onToggle,
}) => {
  return (
    <motion.button
      className="fixed left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-brown-100/10 to-gray-50/0 backdrop-filter backdrop-blur-sm rounded-full shadow-md border border-brown-300/20 flex items-center justify-center hover:bg-brown-100/5 transition-colors duration-200 opacity-0"
      animate={{
        y: isNavVisible ? positions.navbarVisible : positions.navbarHidden,
        rotate: isNavVisible ? 180 : 0,
        opacity: isNavVisible ? 0 : 1,
        scale: isNavVisible ? 0.95 : 1,
      }}
      transition={{
        y: { type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] },
        rotate: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
      onClick={onToggle}
      style={{ zIndex: Z_INDEX.NAVBAR_TOGGLE_ARROW }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        animate={{
          stroke:
            colorScheme === "brand-brown"
              ? "var(--color-brown-100)"
              : "var(--color-green-100)",
        }}
        strokeWidth="2"
      >
        <path
          d="M18 15l-6-6-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
};
