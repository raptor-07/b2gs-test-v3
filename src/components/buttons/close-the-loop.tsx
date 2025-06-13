"use client";

import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { cn } from "@/utils/cn";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const animationData = useAnimationData(ANIMATION_URL);

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
      <p className="text-sm text-nowrap">Let&#39;s close the loop</p>

      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        className="w-6 h-6"
      />
    </button>
  );
});

CloseTheLoopButton.displayName = "CloseTheLoopButton";

export default CloseTheLoopButton;
