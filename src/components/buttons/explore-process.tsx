"use client";

import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { cn } from "@/utils/cn";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ExploreProcessButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = "/assets/lottie/closetheloop.json";

const ExploreProcessButton = forwardRef<
  HTMLButtonElement,
  ExploreProcessButtonProps
>(({ className, ...props }, ref) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const animationData = useAnimationData(ANIMATION_URL);

  return (
    <button
      ref={ref}
      className={cn(
        "text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center",
        "transition-opacity duration-300",
        "hover:bg-yellow-300 transition-transform duration-400",
        className
      )}
      {...props}
    >
      <p className="text-sm text-nowrap">Our Process</p>

      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-6 h-6"
      />
    </button>
  );
});

ExploreProcessButton.displayName = "ExploreProcessButton";

export default ExploreProcessButton;
