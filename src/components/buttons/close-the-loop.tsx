"use client";

import { ButtonHTMLAttributes, forwardRef, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { LottieWrapper } from "../lottie";

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const animationData = useAnimationData(ANIMATION_URL);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [totalFrames, setTotalFrames] = useState(0);

  return (
    <button
      ref={ref}
      className={cn(
        "text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center",
        "transition-opacity duration-300",
        className
      )}
      {...props}
      onMouseEnter={() => {
        if (isAnimationLoaded && lottieRef.current?.animationItem) {
          // Set direction to forward and play from current frame to last frame
          lottieRef.current.setDirection(1);
          lottieRef.current.playSegments([currentFrame, totalFrames - 1], true);
        }
      }}
      onMouseLeave={() => {
        if (isAnimationLoaded && lottieRef.current?.animationItem) {
          // Set direction to reverse and play from current frame to first frame
          lottieRef.current.setDirection(-1);
          lottieRef.current.playSegments([currentFrame, 0], true);
        }
      }}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper
        className="w-8 h-8"
        aspectRatio="1/1"
        skeletonClassName="bg-yellow-300 dark:bg-yellow-800"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          onDOMLoaded={() => {
            setIsAnimationLoaded(true);
            if (lottieRef.current?.animationItem) {
              // Store total frames and stop initial autoplay
              setTotalFrames(lottieRef.current.animationItem.totalFrames);
              lottieRef.current.stop();
            }
          }}
          onEnterFrame={() => {
            if (lottieRef.current?.animationItem) {
              setCurrentFrame(lottieRef.current.animationItem.currentFrame);
            }
          }}
          onComplete={() => {
            if (lottieRef.current?.animationItem) {
              lottieRef.current.stop();
            }
          }}
          className="w-8 h-8"
        />
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = "CloseTheLoopButton";

export default CloseTheLoopButton;
