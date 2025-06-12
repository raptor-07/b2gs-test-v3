"use client";

import { LottieBase } from "./LottieBase";
import type { InteractivityConfig } from "./types";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  interactivity?: InteractivityConfig | undefined;
  lottieRef?: React.MutableRefObject<HTMLDivElement | null>;
  currentFrame?: React.MutableRefObject<number>;
}

export function LottiePlayer({
  animationData,
  className = "",
  autoplay = false,
  loop = false,
  interactivity,
  lottieRef = undefined,
  currentFrame = undefined,
}: LottiePlayerProps) {
  return (
    <LottieBase
      animationData={animationData}
      className={className}
      autoplay={autoplay}
      loop={loop}
      interactivity={interactivity}
      lottieRef={lottieRef}
      currentFrame={currentFrame}
    />
  );
}
