"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";
import { useLottieFilesInteractivity } from "@/components/lottie/hooks/useLottieFilesInteractivity";
import {
  earthAnimationChainConfig,
  LottieInteractivityConfig,
} from "@/constants/lottieInteractivityConfigs";
import { useId } from "react";

export function EarthAnimation({ className }: { className?: string }) {
  const { setupInteractivity } = useLottieFilesInteractivity();

  const EARTH_ANIMATION_URL = "/assets/lottie/earth.json";

  const EARTH_PLACEHOLDER_URL = "/assets/hero/earth.png";
  const interactivityConfig: LottieInteractivityConfig =
    earthAnimationChainConfig;

  const baseId = useId();
  const sanitizedId = baseId.replace(/:/g, "_").replace(/\./g, "_");
  const mainPlayerId = `${sanitizedId}-main`;
  const lottieContainerId = `${sanitizedId}-container`;
  const handleMainPlayerLoad = () => {
    console.log(`Main player ${mainPlayerId} loaded, setting up interactivity`);
    setupInteractivity(mainPlayerId, interactivityConfig, lottieContainerId);
  };

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center aspect-square",
        className
      )}
    >
      <motion.div className="w-full relative" id={lottieContainerId}>
        <div className="w-full">
          <LottieFilesPlayer
            id={mainPlayerId}
            src={EARTH_ANIMATION_URL}
            placeholderImage={EARTH_PLACEHOLDER_URL}
            isInteractive={true}
            className="w-full h-full"
            onLoad={handleMainPlayerLoad}
          />
        </div>
      </motion.div>
    </div>
  );
}
