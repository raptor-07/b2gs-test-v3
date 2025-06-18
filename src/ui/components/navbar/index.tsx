"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useBackgroundAwareNavbar } from "@/ui/hooks/useBackgroundAwareNavbar";
import { useScrollDirection } from "@/ui/hooks/useScrollDirection";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ToggleArrow } from "./toggle-arrow";
import { NavbarProps } from "./types";
import { Z_INDEX } from "@/utils/z-index";

const NAVBAR_HEIGHT = 80;

export const Navbar: React.FC<NavbarProps> = ({
  className = "",
  colorChangeRefs = [],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { color } = useBackgroundAwareNavbar(colorChangeRefs);
  const { shouldHide } = useScrollDirection({
    threshold: 100,
    desktopOnly: true,
  });

  // Handle scroll-based visibility with debounce
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (shouldHide && !isMobileMenuOpen) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    } else {
      setIsVisible(true);
    }
    return () => clearTimeout(timeout);
  }, [shouldHide, isMobileMenuOpen]);

  const toggleNavbar = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`fixed left-0 top-4 w-full ${className}`}
          style={{
            zIndex: Z_INDEX.NAVBAR_BASE,
            pointerEvents: isVisible ? "auto" : "none",
          }}
          animate={{
            y: isVisible ? 0 : -(NAVBAR_HEIGHT + 6),
            opacity: isVisible ? 1 : 0.5,
          }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0],
            opacity: { duration: 0.2 },
          }}
        >
          {/* Desktop Navigation */}
          <div className="w-full flex justify-center">
            <DesktopNav colorScheme={color} />
          </div>

          {/* Mobile Navigation */}
          <div style={{ zIndex: Z_INDEX.NAVBAR_MOBILE_CONTAINER }}>
            <MobileNav
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              colorScheme={color}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <ToggleArrow
        isNavVisible={isVisible}
        colorScheme={color}
        onToggle={toggleNavbar}
      />
    </>
  );
};

export default Navbar;
