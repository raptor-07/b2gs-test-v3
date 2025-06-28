"use client";

import { useId } from "react";
import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";
import { useLottieFilesInteractivity } from "@/components/lottie/hooks/useLottieFilesInteractivity";
import {
  hoverHoldConfig,
  LottieInteractivityConfig,
} from "@/constants/lottieInteractivityConfigs";
import { motion } from "motion/react";

interface ProcessCardProps {
  title: string;
  bullets: string[];
  lottieUrl: string;
  placeholderImage: string;
  number: number;
}

function GrainyNumber({ number }: { number: number }) {
  return (
    <span
      className="
        text-7xl sm:text-7xl md:text-7xl lg:text-8xl font-extrabold
        transition-all duration-300
        font-sans
        grainy-number
      "
      style={{
        fontFamily: "var(--typography-fonts-inter), Inter, sans-serif",
      }}
    >
      {number}
    </span>
  );
}

export function ProcessCard({
  title,
  bullets,
  lottieUrl,
  placeholderImage,
  number,
}: ProcessCardProps) {
  const interactivityConfig: LottieInteractivityConfig = hoverHoldConfig;
  const { setupInteractivity } = useLottieFilesInteractivity();

  // Generate stable unique IDs and sanitize for CSS selectors
  const baseId = useId();
  const sanitizedId = baseId.replace(/:/g, "_").replace(/\./g, "_");
  const lottiePlayerId = `${sanitizedId}-main`;
  const lottieContainerId = `${sanitizedId}-container`;

  // Set up interactivity for the main animation player
  const handleLottiePlayerLoad = () => {
    setupInteractivity(lottiePlayerId, interactivityConfig, lottieContainerId);
  };

  return (
    <div
      className="
        process-card
        relative rounded-xl border border-gray-200 p-6 lg:p-6 flex flex-col justify-between
        transition-transform duration-800 overflow-hidden shadow-md hover:shadow-xl hover:border-gray-200 hover:scale-[1.02] will-change-transform
        bg-white
      "
      style={{
        background:
          "linear-gradient(179.959deg, #DDDDDD 40%, rgba(255,255,255,0.10) 160%)",
        willChange: "transform",
      }}
      id={lottieContainerId}
    >
      {/* Background noise texture */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/textures/grainy-gray.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Card grid layout */}
      <div className="grid min-h-[150px] md:min-h-[150px] grid-rows-[min-content_auto_0] md:grid-rows-[min-content_auto_auto] grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr] gap-2">
        {/* Lottie Animation */}
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex items-center">
          <div className="w-12 h-12 relative">
            <motion.div className="w-full h-full absolute inset-0">
              <LottieFilesPlayer
                id={lottiePlayerId}
                src={lottieUrl}
                placeholderImage={placeholderImage}
                isInteractive={true}
                className="w-full h-full"
                onLoad={handleLottiePlayerLoad}
              />
            </motion.div>
          </div>
        </div>

        {/* Title and Bullets */}
        <div className="row-start-2 row-end-3 col-start-1 col-end-2 flex flex-col justify-center gap-2">
          <h3 className="text-base md:text-base text-mint-950 font-semibold lg:text-nowrap">
            {title}
          </h3>
          <ul className="list-disc pl-4 space-y-1">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-mint-950">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Number with grainy gradient and hover effect */}
        <div className="row-span-3 col-start-2 col-end-3 flex items-end justify-end relative">
          <GrainyNumber number={number} />
        </div>
      </div>
    </div>
  );
}
