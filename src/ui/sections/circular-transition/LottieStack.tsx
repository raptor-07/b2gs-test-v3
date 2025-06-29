"use client";

import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";

interface LottieStackProps {
  title: string;
  lottieSrc: string;
  description: string;
  placeholderImage?: string;
}

export function TransitionLottie({
  title,
  lottieSrc,
  description,
  placeholderImage,
}: LottieStackProps) {
  return (
    <div className="flex flex-col items-start w-full">
      <span className="text-gray-500 text-md lg:text-lg font-semibold text-center mb-2 w-full">
        {title}
      </span>
      <div className="w-full max-w-[530px] aspect-[530/165] mb-2 flex items-center justify-center mx-auto">
        <LottieFilesPlayer
          src={lottieSrc}
          placeholderImage={placeholderImage ?? ""}
          isInteractive={false}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
      <span className="text-gray-500 text-sm lg:text-md text-center w-full">
        {description}
      </span>
    </div>
  );
}
