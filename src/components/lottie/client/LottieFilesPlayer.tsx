"use client";

import { useEffect, useRef, useState } from "react";

interface LottieFilesPlayerProps {
  src: string;
  id?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  style?: React.CSSProperties;
  className?: string;
  // onLoad?: () => void;
  onReady?: () => void;
}

export function LottieFilesPlayer({
  src,
  id,
  autoplay = false,
  loop = false,
  style,
  className,
  // onLoad,
  onReady,
}: LottieFilesPlayerProps) {
  const playerRef = useRef<HTMLElement>(null);
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  useEffect(() => {
    // Import lottie-player dynamically for Next.js compatibility
    import("@lottiefiles/lottie-player")
      .then(() => {
        // setIsPlayerLoaded(true);
        onReady?.();
        setIsPlayerLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading lottie-player:", error);
        setIsPlayerLoaded(false);
      });
  }, [onReady]);

  // useEffect(() => {
  //   if (isPlayerLoaded && playerRef.current) {
  //     const player = playerRef.current;

  //     // const handleLoad = () => {
  //     //   onLoad?.();
  //     // };

  //     // const handleReady = () => {
  //     //   onReady?.();
  //     // };

  //     // player.addEventListener("load", handleLoad);
  //     // player.addEventListener("ready", handleReady);

  //     // return () => {
  //     //   player.removeEventListener("load", handleLoad);
  //     //   player.removeEventListener("ready", handleReady);
  //     // };
  //   }
  // }, [isPlayerLoaded, onLoad, onReady]);

  if (!isPlayerLoaded) {
    return null;
  }

  return (
    <lottie-player
      ref={playerRef}
      id={id}
      src={src}
      autoplay={autoplay}
      loop={loop}
      style={style}
      className={className}
    />
  );
}
