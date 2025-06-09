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
