<<<<<<< HEAD
import { useState, useEffect, useMemo } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useMemo(() => () => window.innerWidth <= 768, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIsMobile]);

  return isMobile;
};

export default useIsMobile;
=======
import { useState, useEffect } from "react";

/**
 * Hook to detect if the current viewport width is below a mobile threshold
 * @param threshold - The width threshold in pixels below which a device is considered mobile
 * @returns boolean indicating if the current viewport is considered mobile
 */
export function useIsMobile(threshold: number = 640): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      // console.log("checking mobile");
      const width = window.visualViewport?.width ?? window.innerWidth;
      // console.log(width);
      setIsMobile(width < threshold);
    };

    // Run initial check
    if (typeof window !== "undefined") {
      checkMobile();
    }

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [threshold]);

  return isMobile;
}
>>>>>>> 2e201a4b04102ec8db85801264d10a900fedab08
