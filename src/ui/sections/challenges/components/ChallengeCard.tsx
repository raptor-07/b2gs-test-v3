"use client";

import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import { useLottieInteractivity } from "@/components/lottie";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ILottie } from "@lottielab/lottie-player";
import { DynamicLottieReact } from "@/components/lottie/client/DynamicLottieReact";

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
  const animationData = useAnimationData(animationUrl);
  const iconAnimationData = useAnimationData(iconLottieUrl);
  const mainLottieRef = useRef<ILottie>(null);
  const iconLottieRef = useRef<ILottie>(null);
  const { handleLottieInteractivity } = useLottieInteractivity();

  // Add player ready states
  const [isMainPlayerReady, setIsMainPlayerReady] = useState(false);
  const [isIconPlayerReady, setIsIconPlayerReady] = useState(false);

  // Create callback handlers
  const handleMainPlayerReady = () => {
    setIsMainPlayerReady(true);
  };

  const handleIconPlayerReady = () => {
    setIsIconPlayerReady(true);
  };


  return (
    <div
      className="rounded-xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-300 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(179.959deg, #DDDDDD 0%, rgba(255, 255, 255, 10%) 100%)",
      }}
      onMouseEnter={() => {
        handleLottieInteractivity(mainLottieRef, "mouseEnter");
        handleLottieInteractivity(iconLottieRef, "mouseEnter");
      }}
      onMouseLeave={() => {
        handleLottieInteractivity(mainLottieRef, "mouseLeave");
        handleLottieInteractivity(iconLottieRef, "mouseLeave");
      }}
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
              {!iconAnimationData ? (
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
                  animate={{ opacity: isIconPlayerReady ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <DynamicLottieReact
                    lottie={iconAnimationData}
                    ref={iconLottieRef}
                    loop={false}
                    className="w-full h-full"
                    style={{ pointerEvents: "none" }}
                    onPlayerReady={handleIconPlayerReady}
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
              {!animationData ? (
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
                  animate={{ opacity: isMainPlayerReady ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <DynamicLottieReact
                    lottie={animationData}
                    ref={mainLottieRef}
                    className="w-full h-full"
                    style={{ pointerEvents: "none" }}
                    onPlayerReady={handleMainPlayerReady}
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
