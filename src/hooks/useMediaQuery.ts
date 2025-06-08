"use client";

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Initialize with correct value on mount
    const media = window.matchMedia(query);
    setMatches(media.matches);

    // Create listener function
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup on unmount
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
