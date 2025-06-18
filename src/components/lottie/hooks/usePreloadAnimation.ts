import { useEffect } from "react";

const preloadedAnimations = new Set<string>();

export function usePreloadAnimation(animationUrl: string) {
  useEffect(() => {
    if (preloadedAnimations.has(animationUrl)) {
      return;
    }

    // Add to preloaded set immediately to prevent duplicate preloading
    preloadedAnimations.add(animationUrl);

    // Preload the animation
    fetch(animationUrl)
      .then((res) => res.json())
      .catch((err) => {
        console.error("Error preloading animation:", err);
        // Remove from preloaded set on error
        preloadedAnimations.delete(animationUrl);
      });
  }, [animationUrl]);
}
