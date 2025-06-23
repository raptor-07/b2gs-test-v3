// 'use client'

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

type InViewPopInProps = {
  children: React.ReactNode;
  duration?: number; // seconds
  delay?: number; // seconds
  className?: string;
  once?: boolean;
  margin?: `${number}${"px" | "%"}`;
  amount?: "some" | "all" | number;
};

export default function InViewPopIn({
  children,
  duration = 0.5,
  delay = 0,
  className = "",
  once = true,
  margin,
  amount,
}: InViewPopInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin,
    amount,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 500 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 500 }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
