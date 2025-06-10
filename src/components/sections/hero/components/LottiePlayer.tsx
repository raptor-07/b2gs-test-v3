"use client";

import Lottie from "react-lottie-player";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  animationData: Record<string, unknown>;
  className?: string;
}

export function LottiePlayer({
  animationData,
  className = "",
}: LottiePlayerProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isInView && !hasPlayed) {
      console.log("Animation is in view, playing now.");
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

  return (
    <div ref={containerRef} className={className}>
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
}
