"use client";

import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import type { Player as PlayerType } from "@lottiefiles/react-lottie-player";

type LottieEvent =
  | "load"
  | "error"
  | "play"
  | "pause"
  | "stop"
  | "loop"
  | "complete"
  | "frame";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onLoad?: () => void;
  onEvent?: (event: LottieEvent) => void;
  playerRef?: React.RefObject<PlayerType>;
  style?: React.CSSProperties;
}

export function LottiePlayer({
  animationData,
  className = "",
  autoplay = false,
  loop = false,
  onLoad,
  onEvent,
  playerRef: externalRef,
  style,
}: LottiePlayerProps) {
  const internalRef = useRef<PlayerType>(null);
  const ref = externalRef || internalRef;

  const mergedStyle = {
    width: "100%",
    height: "100%",
    ...style,
  };

  return (
    <div className={className}>
      <Player
        ref={ref}
        autoplay={autoplay}
        loop={loop}
        src={animationData}
        style={mergedStyle}
        onEvent={(event: LottieEvent) => {
          if (event === "load" && onLoad) {
            onLoad();
          }
          onEvent?.(event);
        }}
      />
    </div>
  );
}
