"use client";

import type { ILottie } from "@lottielab/lottie-player";
import type { LottieReact as LottieReactType } from "@lottielab/lottie-player";
import { forwardRef, useEffect, useState } from "react";

console.log("DynamicLottieReact module loaded");

interface DynamicLottieReactProps {
  lottie: object;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
  onPlayerReady?: () => void;
}

export const DynamicLottieReact = forwardRef<ILottie, DynamicLottieReactProps>(
  ({ lottie, loop, onPlayerReady, ...props }, ref) => {
    const [LottieReact, setLottieReact] = useState<
      typeof LottieReactType | null
    >(null);
    // Load the LottieReact component on mount
    useEffect(() => {
      let isMounted = true;
      console.log("Loading LottieReact component...");

      import("@lottielab/lottie-player")
        .then((mod) => {
          console.log("LottieReact import successful:", mod);
          if (isMounted) {
            setLottieReact(() => mod.LottieReact);
            onPlayerReady?.();
          }
        })
        .catch((error) => {
          console.error("Error loading LottieReact:", error);
        });

      return () => {
        isMounted = false;
      };
    }, [onPlayerReady]);

    if (!LottieReact) {
      return null;
    }

    return <LottieReact lottie={lottie} loop={loop} {...props} ref={ref} />;
  }
);

DynamicLottieReact.displayName = "DynamicLottieReact";
