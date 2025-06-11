"use client";

import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import {
  LottiePlayer,
  LottieWrapper,
  usePreloadAnimation,
} from "@/components/lottie";

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the animation
  usePreloadAnimation(ANIMATION_URL);

  return (
    <button
      ref={ref}
      className={cn(
        "text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center",
        "transition-opacity duration-300",
        !isLoaded && "opacity-95",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper className="w-6 h-6">
        <LottiePlayer
          animationUrl={ANIMATION_URL}
          className="w-6 h-6"
          isHovered={isHovered}
          onLoad={() => setIsLoaded(true)}
        />
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = "CloseTheLoopButton";

export default CloseTheLoopButton;
