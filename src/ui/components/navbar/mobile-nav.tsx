"use client";

import React from "react";
import { motion } from "motion/react";
import { NAV_ITEMS } from "./types";
import { NavLink } from "./nav-link";
import { MobileNavProps } from "./types";
import { Z_INDEX } from "@/utils/z-index";

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  colorScheme,
}) => {
  return (
    <motion.div
      layout
      className="fixed md:hidden right-4 top-6 bg-gradient-to-r from-brown-100/10 to-gray-50/0 backdrop-filter backdrop-blur-sm shadow-md shadow-gray-100/80 border border-brown-300/20"
      style={{
        transformOrigin: "top right",
        willChange: "width, height, border-radius",
        zIndex: Z_INDEX.NAVBAR_MOBILE_CONTAINER,
      }}
      initial={false}
      animate={{
        width: isOpen ? "300px" : "50px",
        height: isOpen ? "500px" : "50px",
        borderRadius: isOpen ? "24px" : "8px",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-full h-full">
        {/* Hamburger Button */}
        <motion.button
          layout
          onClick={onClose}
          initial={false}
          className="absolute bg-green-100 hover:bg-green-200 transition-colors duration-200"
          style={{
            top: isOpen ? "2%" : "30%",
            left: isOpen ? "85%" : "35%",
            willChange: "width, height",
            transformOrigin: "center",
            zIndex: Z_INDEX.NAVBAR_MOBILE_BUTTON,
          }}
          animate={{
            width: isOpen ? "30px" : "20px",
            height: isOpen ? "30px" : "20px",
            borderRadius: isOpen ? "16%" : "50%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />

        {/* Mobile Menu Content */}
        {isOpen && (
          <nav className="h-full flex flex-col items-center justify-center">
            <ul className="space-y-8">
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink item={item} colorScheme={colorScheme} />
                </motion.li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </motion.div>
  );
};
