"use client";

import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { cn } from "@/utils/cn";
import { LottieWrapper } from "@/components/lottie";
import { LottiePlayer } from "@/components/lottie";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import type { InteractivityConfig } from "@/components/lottie/client/types";

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";
const TOTAL_FRAMES = 100; // From animation data

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const animationData = useAnimationData(ANIMATION_URL);

  const lottieRef = useRef<HTMLDivElement>(null);
  const currentFrame = useRef(0);

  // Configure cursor-based interaction with smoother transitions
  const interactivity: InteractivityConfig = {
    mode: "cursor",
    actions: [
      {
        // When cursor is inside the button
        position: { x: [0, 1], y: [0, 1] },
        type: "play",
        frames: [0, TOTAL_FRAMES],
      },
      {
        // When cursor is near the button (transition zone)
        position: { x: [-0.5, -0.2], y: [-0.5, -0.2] },
        type: "seek",
        frames: [currentFrame.current, 0],
      },
    ],
  };

  return (
    <button
      ref={ref}
      className={cn(
        "text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center",
        "transition-opacity duration-300",
        className
      )}
      {...props}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper className="w-6 h-6">
        <div className={cn("w-full h-full")}>
          {animationData && (
            <LottiePlayer
              animationData={animationData}
              className="w-6 h-6"
              autoplay={false}
              loop={false}
              interactivity={interactivity}
              lottieRef={lottieRef}
              currentFrame={currentFrame}
            />
          )}
        </div>
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = "CloseTheLoopButton";

export default CloseTheLoopButton;
