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
  onReady?: (playerRef: React.RefObject<HTMLElement>) => void;
}

export function LottieFilesPlayer({
  src,
  id,
  className,
  onReady,
}: LottieFilesPlayerProps) {
  const playerRef = useRef<HTMLElement>(null);
  const [libLoaded, setLibLoaded] = useState(false);

  // Load the lottie-player library once
  useEffect(() => {
    import("@lottiefiles/lottie-player")
      .then(() => setLibLoaded(true))
      .catch((error) => {
        console.log("Error loading lottie-player:", error);
      });
  }, []);

  // Attach event listener after both library and DOM node are ready
  useEffect(() => {
    if (!libLoaded || !playerRef.current) return;

    onReady?.(playerRef);
    // setIsPlayerLoaded(true);
  }, [libLoaded, onReady]);

  return (
    <lottie-player
      ref={playerRef as React.Ref<HTMLElement>}
      id={id}
      src={src}
      className={className}
    />
  );
}
