"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";
import { LottiePlayer } from "@/components/lottie";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import Image from "next/image";

export function InterconnectedAnimation({ className }: { className?: string }) {
  const animationData = useAnimationData("/assets/lottie/interconnected.json");

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center aspect-square",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {!animationData ? (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/assets/interconnected/interconnected.svg"
              alt="Interconnected Animation Placeholder"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            key="lottie"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            <div className="w-full h-full">
              <LottiePlayer
                animationData={animationData}
                className="w-full h-full"
                autoplay={true}
                loop={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
