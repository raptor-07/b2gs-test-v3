// 'use client'

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useMotionValueEvent, useScroll } from "motion/react";

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
  // once = true, // removed unused prop
  margin,
  amount,
}: InViewPopInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin,
    amount,
  });
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [hasAnimated, setHasAnimated] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious?.() ?? 0;
    const diff = current - prev;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  useEffect(() => {
    if (!hasAnimated && scrollDirection === "down" && isInView) {
      setHasAnimated(true);
    }
  }, [isInView, scrollDirection, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
      }
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
