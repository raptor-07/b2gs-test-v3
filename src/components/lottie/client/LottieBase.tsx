"use client";

import Lottie from "lottie-react";
import type { InteractivityConfig } from "./types";
import { on } from "events";

interface LottieBaseProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  interactivity?: InteractivityConfig;
  style?: React.CSSProperties;
  lottieRef?: React.MutableRefObject<HTMLDivElement | null>;
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
        if (currentFrame && lottieRef?.current) {
          const animation = lottieRef.current.animationItem.currentFrame;
          currentFrame.current = animation.currentFrame;
        }
      }}
      lottieRef={lottieRef}
    />
  );
}
