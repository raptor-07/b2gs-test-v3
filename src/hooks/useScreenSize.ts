"use client";

import { useMediaQuery } from "./useMediaQuery";

export interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useScreenSize = (): ScreenSize => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const isDesktop = useMediaQuery("(min-width: 992px)");

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
