<<<<<<< HEAD
"use client";

import { useMediaQuery } from "./useMediaQuery";

export interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLoading: boolean;
}

export const useScreenSize = (): ScreenSize => {
  const isMobileQuery = useMediaQuery("(max-width: 767px)");
  const isTabletQuery = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const isDesktopQuery = useMediaQuery("(min-width: 992px)");

  // If any query is null, we're still loading
  const isLoading = isMobileQuery === null || isTabletQuery === null || isDesktopQuery === null;

  return {
    isMobile: isMobileQuery ?? false,
    isTablet: isTabletQuery ?? false,
    isDesktop: isDesktopQuery ?? false,
    isLoading
  };
};
=======
import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const breakpoints: Record<Exclude<ScreenSize, "mobile">, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1270,
  "2xl": 1400,
  "3xl": 1520,
  "4xl": 1800,
};

/**
 * Hook to get the current active screen size based on viewport width
 * Returns "mobile" for widths less than 640px, otherwise returns the active Tailwind screen size class
 * @returns The active screen size ("mobile" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl")
 */
export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(
    typeof window !== "undefined"
      ? window.innerWidth < breakpoints.sm
        ? "mobile"
        : (Object.entries(breakpoints)
            .reverse()
            .find(entry => window.innerWidth >= entry[1])?.[0] as ScreenSize) ??
          "mobile"
      : "mobile"
  );

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < breakpoints.sm) {
        setScreenSize("mobile");
        return;
      }
      
      // Find the largest breakpoint that the current width is greater than or equal to
      const activeSize =
        (Object.entries(breakpoints)
          .reverse()
          .find(entry => window.innerWidth >= entry[1])?.[0] as ScreenSize) ??
        "mobile";
      setScreenSize(activeSize);
    };

    // Check on mount and add resize listener
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return screenSize;
}
>>>>>>> 2e201a4b04102ec8db85801264d10a900fedab08
