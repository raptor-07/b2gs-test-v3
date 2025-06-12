"use client";

import { LottieBase } from "./LottieBase";
import type { InteractivityConfig } from "./types";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  interactivity?: InteractivityConfig | undefined;
}

export function LottiePlayer({
  animationData,
  className = "",
  autoplay = false,
  loop = false,
  interactivity,
}: LottiePlayerProps) {
  return (
    <LottieBase
      animationData={animationData}
      className={className}
      autoplay={autoplay}
      loop={loop}
      interactivity={interactivity}
    />
  );
}
