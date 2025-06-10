"use client";

import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

interface LottiePlayerProps {
  animationUrl: string;
  className?: string;
}

export function LottiePlayer({ animationUrl, className = "" }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    fetch(animationUrl)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, [animationUrl]);

  if (!animationData) return null;

  return (
    <div className={className}>
      <Lottie
        loop={false}
        play
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
