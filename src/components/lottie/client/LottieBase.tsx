"use client";

import Lottie from "lottie-react";
import type { InteractivityConfig } from "./types";

interface LottieBaseProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  interactivity?: InteractivityConfig;
  style?: React.CSSProperties;
}

export function LottieBase({
  animationData,
  className,
  autoplay = false,
  loop = false,
  interactivity = undefined,
  style,
}: LottieBaseProps) {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    ...style,
  };

  return (
    <Lottie
      animationData={animationData}
      className={className}
      style={containerStyle}
      autoplay={autoplay}
      loop={loop}
      {...(interactivity !== undefined && { interactivity })}
    />
  );
}
