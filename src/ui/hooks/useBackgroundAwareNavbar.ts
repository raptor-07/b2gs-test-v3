"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, MotionValue, useMotionValue } from "motion/react";

export type NavColorScheme = "brand-green" | "brand-brown";

export interface BackgroundAwareNavbarResult {
  color: NavColorScheme;
  colorMotionValue: MotionValue<NavColorScheme>;
}

export const useBackgroundAwareNavbar = (
  refs: React.RefObject<HTMLElement>[] = []
): BackgroundAwareNavbarResult => {
  const [color, setColor] = useState<NavColorScheme>("brand-green");
  const colorMotionValue = useMotionValue<NavColorScheme>("brand-green");

  const fallbackRef = useRef(null);

  // Individual useInView calls
  const isRef0InView = useInView(refs[0] || fallbackRef, {
    margin: "-2% 0px -80% 0px",
    amount: "some",
  });
  const isRef1InView = useInView(refs[1] || fallbackRef, {
    margin: "-2% 0px -80% 0px",
    amount: "some",
  });
  const isRef2InView = useInView(refs[2] || fallbackRef, {
    margin: "-2% 0px -80% 0px",
    amount: "some",
  });
  const isRef3InView = useInView(refs[3] || fallbackRef, {
    margin: "-2% 0px -80% 0px",
    amount: "some",
  });
  const isRef4InView = useInView(refs[4] || fallbackRef, {
    margin: "-2% 0px -80% 0px",
    amount: "some",
  });

  // Get inView states for actual refs only
  const viewStates = [
    refs[0] && isRef0InView,
    refs[1] && isRef1InView,
    refs[2] && isRef2InView,
    refs[3] && isRef3InView,
    refs[4] && isRef4InView,
  ].slice(0, refs.length);

  useEffect(() => {
    // Check if any section that needs brown text is in view
    const shouldUseBrownText = viewStates.some((isInView) => isInView);

    // Update color based on visibility
    const newColor = shouldUseBrownText ? "brand-brown" : "brand-green";

    if (newColor !== color) {
      console.log("Setting color to", newColor);
      setColor(newColor);
      colorMotionValue.set(newColor);
    }
  }, [viewStates, color, colorMotionValue]);

  return {
    color,
    colorMotionValue,
  };
};
