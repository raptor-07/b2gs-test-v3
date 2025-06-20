"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";
import { useLottieFilesInteractivity } from "@/components/lottie/hooks/useLottieFilesInteractivity";

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
  const { setupInteractivity } = useLottieFilesInteractivity();

  // Add loading states for both player readiness and animation data
  // const [isMainLottieLoaded, setIsMainLottieLoaded] = useState(false);
  // const [isIconLottieLoaded, setIsIconLottieLoaded] = useState(false);
  const [isMainPlayerReady, setIsMainPlayerReady] = useState(false);
  const [isIconPlayerReady, setIsIconPlayerReady] = useState(false);

  // Generate unique IDs for the players
  const mainPlayerId = useRef(`main-lottie-${Math.random().toString(36)}`);
  const iconPlayerId = useRef(`icon-lottie-${Math.random().toString(36)}`);
  const lottieContainerId = useRef(
    `lottie-container-${Math.random().toString(36)}`
  );

  // Create callback handlers
  // const handleMainLottieLoad = useCallback(() => {
  //   setIsMainLottieLoaded(true);
  // }, []);

  const handleMainPlayerReady = useCallback(() => {
    setIsMainPlayerReady(true);
    setupInteractivity(mainPlayerId.current, lottieContainerId.current);
  }, [setupInteractivity]);

  // const handleIconLottieLoad = useCallback(() => {
  //   setIsIconLottieLoaded(true);
  // }, []);

  const handleIconPlayerReady = useCallback(() => {
    setIsIconPlayerReady(true);
    setupInteractivity(iconPlayerId.current, lottieContainerId.current);
  }, [setupInteractivity]);

  return (
    <div
      className="rounded-xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-300 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(179.959deg, #DDDDDD 0%, rgba(255, 255, 255, 10%) 100%)",
      }}
      id={lottieContainerId.current}
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
          <AnimatePresence mode="wait">
            {isIconPlayerReady ? (
              <motion.div
                key="icon-placeholder"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <Image
                  src={iconPlaceholderImage}
                  alt={`${title} Icon`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key="icon-lottie"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full absolute inset-0"
              >
                <LottieFilesPlayer
                  id={iconPlayerId.current}
                  src={iconLottieUrl}
                  autoplay={false}
                  loop={false}
                  className="w-full h-full"
                  style={{ pointerEvents: "none" }}
                  // onLoad={handleIconPlayerReady}
                  onReady={handleIconPlayerReady}
                />
              </motion.div>
            )}
          </AnimatePresence>
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
            <AnimatePresence mode="wait">
              {isMainPlayerReady ? (
                <motion.div
                  key="animation-placeholder"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                >
                  <Image
                    src={placeholderImage}
                    alt={`${title} Animation`}
                    fill
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="main-lottie"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full absolute inset-0"
                >
                  <LottieFilesPlayer
                    id={mainPlayerId.current}
                    src={animationUrl}
                    autoplay={false}
                    loop={false}
                    className="w-full h-full"
                    style={{ pointerEvents: "none" }}
                    // onLoad={handleMainPlayerReady}
                    onReady={handleMainPlayerReady}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
