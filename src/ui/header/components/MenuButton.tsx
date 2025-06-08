"use client";

import { motion } from "motion/react";
import { MenuButtonProps } from "../types";
import {
  hamburgerVariants,
  hamburgerMiddleVariants,
  hamburgerBottomVariants,
} from "../animations/variants";

export function MenuButton({ isOpen, onClick, shouldReduceMotion }: MenuButtonProps) {
  const transition = shouldReduceMotion
    ? { duration: 0.1 }
    : { type: "spring", stiffness: 400, damping: 40 };

  return (
    <button
      onClick={onClick}
      className="z-50 p-2 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="relative h-6 w-6"
      >
        <motion.span
          variants={hamburgerVariants}
          transition={transition}
          className="absolute h-0.5 w-6 bg-gray-800 transform-gpu"
          style={{ top: 0 }}
        />
        <motion.span
          variants={hamburgerMiddleVariants}
          transition={transition}
          className="absolute h-0.5 w-6 bg-gray-800 transform-gpu"
          style={{ top: "50%" }}
        />
        <motion.span
          variants={hamburgerBottomVariants}
          transition={transition}
          className="absolute h-0.5 w-6 bg-gray-800 transform-gpu"
          style={{ bottom: 0 }}
        />
      </motion.div>
    </button>
  );
}
