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
  onLoad?: (playerRef: React.RefObject<HTMLElement>) => void;
}

export function LottieFilesPlayer({
  src,
  id,
  className,
  onReady,
  onLoad,
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

    const player = playerRef.current;

    // Call onReady immediately when both lib and player are ready
    onReady?.(playerRef);

    // Set up load event listener
    const handleLoad = () => {
      console.log(`Lottie player ${id} loaded`);
      onLoad?.(playerRef);
    };

    // Add load event listener
    player.addEventListener("load", handleLoad);

    // Also listen for 'ready' event as fallback
    player.addEventListener("ready", handleLoad);

    // Cleanup
    return () => {
      player.removeEventListener("load", handleLoad);
      player.removeEventListener("ready", handleLoad);
    };
  }, [libLoaded, onReady, onLoad, id]);

  return (
    <lottie-player
      ref={playerRef as React.Ref<HTMLElement>}
      id={id}
      src={src}
      className={className}
    />
  );
}
