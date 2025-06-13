"use client";

import { AnimatePresence, motion } from "motion/react";
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

  return (
    <LottieWrapper
      aspectRatio="1/1"
      className={cn("w-full max-w-[600px]", className)}
      skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
    >
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          {!animationData ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <Image
                src="/assets/hero/earth.jpg"
                alt="Earth Animation Placeholder"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </motion.div>
          ) : (
            <motion.div
              key="lottie"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <LottiePlayer
                animationData={animationData}
                className="w-full h-full"
                autoplay={true}
                loop={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LottieWrapper>
  );
}
