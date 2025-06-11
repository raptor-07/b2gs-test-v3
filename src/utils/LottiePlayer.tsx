"use client";

import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

interface LottiePlayerProps {
  animationUrl: string;
  className?: string;
  isHovered?: boolean;
}

export function LottiePlayer({ animationUrl, className = "", isHovered = false }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object>();
  const [playState, setPlayState] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    
    fetch(animationUrl)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setAnimationData(data);
        }
      })
      .catch((err) => console.error("Error loading animation:", err));
      
    return () => {
      isMounted = false;
    };
  }, [animationUrl]);

  useEffect(() => {
    setPlayState(isHovered);
  }, [isHovered]);

  if (!animationData) return null;

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
