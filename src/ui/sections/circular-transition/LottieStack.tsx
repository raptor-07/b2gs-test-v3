"use client";

import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";

interface LottieStackProps {
  title: string;
  lottieSrc: string;
  description: string;
  placeholderImage?: string;
}

export function LottieStack({
  title,
  lottieSrc,
  description,
  placeholderImage,
}: LottieStackProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-500 text-lg font-semibold text-center mb-2">
        {title}
      </span>
      <div className="w-40 h-40 mb-2 flex items-center justify-center">
        <LottieFilesPlayer
          src={lottieSrc}
          placeholderImage={placeholderImage ?? ""}
          isInteractive={false}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
      <span className="text-gray-500 text-sm text-center">{description}</span>
    </div>
  );
}
