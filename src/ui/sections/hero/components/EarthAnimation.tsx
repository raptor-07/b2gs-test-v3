"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";
import { LottiePlayer } from "@/components/lottie";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import ParticlesBackground from "@/ui/sections/hero/components/particles/ParticlesBackground";

export function EarthAnimation({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const EARTH_ANIMATION_URL = isMobile
    ? "/assets/lottie/mobile/earth-mobile.json"
    : "/assets/lottie/earth-2.json";
  // public/assets/lottie/earth.json
  // : "/assets/lottie/earth.json";
  const animationData = useAnimationData(EARTH_ANIMATION_URL);

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center aspect-square",
        className
      )}
    >
      <ParticlesBackground />
      <AnimatePresence mode="wait">
        {!animationData ? (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/assets/hero/earth-mobile.jpg"
              alt="Earth Animation Placeholder"
              width={600}
              height={600}
              className="md:hidden w-full h-auto min-w-[480px] object-cover rounded-lg"
              priority
            />
            <Image
              src="/assets/hero/earth-2.jpg"
              alt="Earth Animation Placeholder"
              width={600}
              height={600}
              className="hidden md:block w-full h-full object-contain rounded-lg z-100"
              priority
              style={{
                zIndex: 1,
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="lottie"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative z-10"
          >
            <div className="w-full h-full">
              <LottiePlayer
                animationData={animationData}
                className="w-full h-full"
                autoplay={true}
                loop={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
