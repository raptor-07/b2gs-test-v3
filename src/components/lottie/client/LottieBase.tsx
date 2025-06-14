"use client";

import Lottie from "lottie-react";
import type { InteractivityConfig, LottieRef } from "./types";

interface LottieBaseProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  interactivity?: InteractivityConfig;
  style?: React.CSSProperties;
  lottieRef?: LottieRef;
  currentFrame?: React.MutableRefObject<number>;
}

export function LottieBase({
  animationData,
  className,
  autoplay = false,
  loop = false,
  interactivity = undefined,
  style,
  lottieRef = undefined,
  currentFrame = undefined,
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
      onEnterFrame={() => {
        if (currentFrame && lottieRef?.current?.animationItem) {
          currentFrame.current = lottieRef.current.animationItem.currentFrame;
        }
      }}
      lottieRef={lottieRef}
    />
  );
}
