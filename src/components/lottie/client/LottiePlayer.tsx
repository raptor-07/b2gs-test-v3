"use client";

import Lottie from "react-lottie-player";
import { useCallback, useEffect, useState } from "react";

const animationCache = new Map<string, object>();

interface LottiePlayerProps {
  animationUrl: string;
  className?: string;
  isHovered?: boolean;
  onLoad?: () => void;
}

export function LottiePlayer({
  animationUrl,
  className = "",
  isHovered = false,
  onLoad,
}: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(() => {
    // Check cache first
    const cached = animationCache.get(animationUrl);
    return cached || null;
  });
  const [playState, setPlayState] = useState(false);

  const fetchAnimation = useCallback(async () => {
    try {
      const res = await fetch(animationUrl);
      const data = await res.json();
      animationCache.set(animationUrl, data);
      setAnimationData(data);
      onLoad?.();
    } catch (err) {
      console.error("Error loading animation:", err);
    }
  }, [animationUrl, onLoad]);

  useEffect(() => {
    if (!animationData) {
      fetchAnimation();
    }
  }, [animationData, fetchAnimation]);

  useEffect(() => {
    setPlayState(isHovered);
  }, [isHovered]);

  if (!animationData) {
    return null;
  }

  return (
    <div className={className}>
      <Lottie
        play={playState}
        loop={false}
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
