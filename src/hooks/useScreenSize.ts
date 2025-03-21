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
