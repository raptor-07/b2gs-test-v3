"use client";

import { ButtonHTMLAttributes, forwardRef, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { LottieWrapper } from "@/components/lottie";
import type { Player } from "@lottiefiles/react-lottie-player";
import { LottiePlayer } from "@/components/lottie";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const playerRef = useRef<Player>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationData = useAnimationData(ANIMATION_URL);

  const handleMouseEnter = () => {
    const player = playerRef.current;
    if (!player) return;

    const currentFrame = player.state.frame;
    player.setPlayerDirection(1); // Forward

    console.debug("CloseTheLoop: Playing forward from frame", currentFrame);

    // If we're at the end, start from beginning
    if (currentFrame === player.state.totalFrames - 1) {
      player.setSeeker(0);
    }

    player.play();
  };

  const handleMouseLeave = () => {
    const player = playerRef.current;
    if (!player) return;

    const currentFrame = player.state.frame;
    player.setPlayerDirection(-1); // Reverse
    player.play();
    console.debug("CloseTheLoop: Playing reverse from frame", currentFrame);
  };

  return (
    <button
      ref={ref}
      className={cn(
        "text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center",
        "transition-opacity duration-300",
        !isLoaded && "opacity-95",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper className="w-6 h-6">
        <div
          className={cn(
            "w-full h-full",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          {animationData && (
            <LottiePlayer
              playerRef={playerRef}
              animationData={animationData}
              className="w-6 h-6"
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = "CloseTheLoopButton";

export default CloseTheLoopButton;
