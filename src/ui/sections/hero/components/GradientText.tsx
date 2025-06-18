"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`bg-clip-text text-transparent inline-block ${className}`}
      style={{
        backgroundImage: "linear-gradient(90deg, #05CD99 0%, #4A806F 100%)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: isHovered ? "20% 50%" : "0% 40%",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
    </motion.span>
  );
}
