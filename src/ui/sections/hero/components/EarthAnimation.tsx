"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { LottiePlayer, LottieWrapper } from "@/components/lottie";
import type { Player } from "@lottiefiles/react-lottie-player";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";

const EARTH_ANIMATION_URL = "/assets/lottie/earth.json";

export function EarthAnimation({ className }: { className?: string }) {
  const playerRef = useRef<Player>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationData = useAnimationData(EARTH_ANIMATION_URL);

  // Set up intersection observer for scroll-based playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasPlayed) {
          console.debug("Earth: Playing animation on scroll");
          const player = playerRef.current;
          if (player) {
            player.play();
            setHasPlayed(true);
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasPlayed]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.debug("Earth: Animation loaded");
  };

  const handleEvent = (event: string) => {
    if (event === "complete" && playerRef.current) {
      console.debug("Earth: Animation completed");
      // No need to do anything, it will stay at the last frame
    }
  };

  // Don't render anything until animation data is loaded
  if (!animationData) {
    return (
      <LottieWrapper
        aspectRatio="1/1"
        className={cn("w-full max-w-[600px]", className)}
        skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
      >
        <div className="w-full h-full" />
      </LottieWrapper>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <LottieWrapper
        aspectRatio="1/1"
        className="w-full max-w-[600px]"
        skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
      >
        <div
          className={cn(
            "w-full h-full transition-all duration-700",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <LottiePlayer
            playerRef={playerRef}
            animationData={animationData}
            className="w-full h-full"
            onLoad={handleLoad}
            onEvent={handleEvent}
            loop={false}
          />
        </div>
      </LottieWrapper>
    </div>
  );
}
