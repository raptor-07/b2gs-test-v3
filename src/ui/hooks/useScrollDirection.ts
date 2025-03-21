"use client";

import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollConfig {
  threshold?: number;
  desktopOnly?: boolean;
}

interface ScrollResult {
  shouldHide: boolean;
}

export const useScrollDirection = ({
  threshold = 100, // Reduced threshold for better response
  desktopOnly = false,
}: ScrollConfig = {}): ScrollResult => {
  const isMobile = useIsMobile(768);
  const { scrollY } = useScroll();
  const [shouldHide, setShouldHide] = useState(false);
  const previousScrollY = useRef(0);
  const lastDirectionChange = useRef(Date.now());
  const accumulatedDelta = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Skip scroll handling for mobile if desktop only
    if (desktopOnly && isMobile) {
      setShouldHide(false);
      return;
    }

    const delta = latest - previousScrollY.current;

    // Accumulate small movements to detect overall direction
    accumulatedDelta.current += delta;

    // Only trigger if accumulated threshold is met and enough time has passed
    if (Math.abs(accumulatedDelta.current) > threshold) {
      // Hide on scroll down, show on scroll up
      setShouldHide(accumulatedDelta.current > 0);
      lastDirectionChange.current = Date.now();
      accumulatedDelta.current = 0; // Reset after direction change
    }

    // Always update previous value for next comparison
    previousScrollY.current = latest;
  });

  return { shouldHide };
};
