"use client";

import { cn } from "@/utils/cn";
import { LottiePlayer, LottieWrapper } from "@/components/lottie";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";

export function EarthAnimation({ className }: { className?: string }) {
  const { isMobile } = useScreenSize();
  const EARTH_ANIMATION_URL = isMobile
    ? "/assets/lottie/mobile/earth-mobile.json"
    : "/assets/lottie/earth.json";
  const animationData = useAnimationData(EARTH_ANIMATION_URL);

  // Don't render anything until animation data is loaded
  if (!animationData) {
    return (
      <LottieWrapper
        aspectRatio="1/1"
        className={cn("w-full max-w-[600px]", className)}
        skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
      >
        <div className="w-full h-full">
          <Image
            src="/assets/hero/earth.jpg"
            alt="Earth Animation Placeholder"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </div>
      </LottieWrapper>
    );
  }

  return (
    <LottieWrapper
      aspectRatio="1/1"
      className={cn("w-full", className)}
      skeletonClassName="bg-gray-100/50"
    >
      <div className={cn("w-full h-full transition-all duration-200")}>
        <LottiePlayer
          animationData={animationData}
          className="w-full h-full"
          autoplay={true}
          loop={false}
        />
      </div>
    </LottieWrapper>
  );
}
