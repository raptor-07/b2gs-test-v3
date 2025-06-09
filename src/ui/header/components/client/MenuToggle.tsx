"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { MenuButtonProps } from "../../types";
import { menuButtonVariants } from "../../animations/variants";

export function MenuToggle({ isOpen, onClick }: MenuButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="h-10 w-10 flex items-center justify-center text-gray-800"
      animate={isOpen ? "hidden" : "visible"}
      variants={menuButtonVariants}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <Menu size={24} />
    </motion.button>
  );
}
