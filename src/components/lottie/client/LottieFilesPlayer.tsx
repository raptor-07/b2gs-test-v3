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
  onReady?: (playerRef: React.RefObject<HTMLElement>) => void;
}

export function LottieFilesPlayer({
  src,
  id,
  // autoplay = false,
  // loop = false,
  // style,
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
        console.log("Lottie player loaded successfully");
      })
      .catch((error) => {
        console.log("Error loading lottie-player:", error);
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
      ref={playerRef as React.Ref<HTMLElement>}
      id={id}
      src={src}
      // autoplay={autoplay}
      // loop={loop}
      // style={style}
      className={className}
      onLoad={() => {
        console.log("Lottie player instance loaded");
        if (playerRef.current) {
          onReady?.(playerRef);
          setIsPlayerLoaded(true);
        }
      }}
    />
  );
}
