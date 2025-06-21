"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";

export function InterconnectedAnimation({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center aspect-square",
        className
      )}
    >
      <motion.div key="lottie" className="w-full h-full relative">
        <div className="w-full h-full">
          <LottieFilesPlayer
            id="interconnected-animation"
            src="/assets/lottie/interconnected.json"
            className="w-full h-full"
            placeholderImage="/assets/interconnected/interconnected.svg"
            style={{ width: "100%", height: "100%" }}
            autoplay={true}
            loop={true}
            controls={false}
          />
        </div>
      </motion.div>
    </div>
  );
}
