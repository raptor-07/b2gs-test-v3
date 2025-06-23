"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";
import { useLottieFilesInteractivity } from "@/components/lottie/hooks/useLottieFilesInteractivity";
import {
  hoverHoldConfig,
  LottieInteractivityConfig,
} from "@/constants/lottieInteractivityConfigs";

interface ChallengeCardProps {
  title: string;
  description: string[];
  animationUrl: string;
  iconLottieUrl: string;
  placeholderImage: string;
  iconPlaceholderImage: string;
}

export function ChallengeCard({
  title,
  description,
  animationUrl,
  iconLottieUrl,
  placeholderImage,
  iconPlaceholderImage,
}: ChallengeCardProps) {
  const interactivityConfig: LottieInteractivityConfig = hoverHoldConfig;

  const { setupInteractivity } = useLottieFilesInteractivity();

  // Generate stable unique IDs but sanitize them for CSS selectors
  const baseId = useId();
  // Replace colons and other invalid characters with valid ones
  const sanitizedId = baseId.replace(/:/g, "_").replace(/\./g, "_");
  const iconPlayerId = `${sanitizedId}-icon`;
  const mainPlayerId = `${sanitizedId}-main`;
  const lottieContainerId = `${sanitizedId}-container`;

  // Handle when the lottie player is loaded and ready for interactivity
  const handleIconPlayerLoad = () => {
    console.log(`Icon player ${iconPlayerId} loaded, setting up interactivity`);
    setupInteractivity(iconPlayerId, interactivityConfig, lottieContainerId);
  };

  // Set up interactivity for the main animation player
  const handleMainPlayerLoad = () => {
    console.log(`Main player ${mainPlayerId} loaded, setting up interactivity`);
    setupInteractivity(mainPlayerId, interactivityConfig, lottieContainerId);
  };

  return (
    <div
      className="rounded-xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-800 relative overflow-hidden shadow-md hover:shadow-xl hover:border-gray-200 hover:scale-[1.02] will-change-transform"
      style={{
        background:
          "linear-gradient(179.959deg, #DDDDDD 0%, rgba(255, 255, 255, 10%) 100%)",
        willChange: "transform",
      }}
      id={lottieContainerId}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/textures/grainy-gray.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-start gap-2 w-full">
        {/* Icon Lottie */}
        <div className="w-12 h-12 relative">
          <motion.div className="w-full h-full absolute inset-0">
            <LottieFilesPlayer
              id={iconPlayerId}
              src={iconLottieUrl}
              placeholderImage={iconPlaceholderImage}
              isInteractive={true}
              className="w-full h-full"
              onLoad={handleIconPlayerLoad}
            />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-base text-mint-950 font-semibold">
          {title}
        </h3>

        {/* Description */}
        <div className="space-y-1">
          {description.map((text, index) => (
            <p key={index} className="text-sm text-mint-950">
              {text}
            </p>
          ))}
        </div>

        {/* Main Animation */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[70%] aspect-video relative">
            <motion.div layout className="w-full h-full relative">
              <LottieFilesPlayer
                id={mainPlayerId}
                src={animationUrl}
                placeholderImage={placeholderImage}
                isInteractive={true}
                className="w-full h-full"
                onLoad={handleMainPlayerLoad}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
