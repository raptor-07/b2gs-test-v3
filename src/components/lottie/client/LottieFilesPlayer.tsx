"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LottieFilesPlayerProps {
  id?: string;
  src: string;
  placeholderImage: string;
  isInteractive?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onReady?: (playerRef: React.RefObject<HTMLElement>) => void;
  onLoad?: (playerRef: React.RefObject<HTMLElement>) => void;
}

export function LottieFilesPlayer({
  id,
  src,
  placeholderImage,
  isInteractive = false,
  style,
  className,
  autoplay = false,
  loop = false,
  controls = false,
  onReady,
  onLoad,
}: LottieFilesPlayerProps) {
  const playerRef = useRef<HTMLElement>(null);
  const [libLoaded, setLibLoaded] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);

  // Load the lottie-player library once
  useEffect(() => {
    import("@lottiefiles/lottie-player")
      .then(() => setLibLoaded(true))
      .catch((error) => {
        console.error("Error loading lottie-player:", error);
      });
  }, []);

  // Attach event listener after both library and DOM node are ready
  useEffect(() => {
    if (!libLoaded || !playerRef.current) return;

    if (!isInteractive) {
      setLottieReady(true);
      return; // Skip if not interactive
    }

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

    // Set the player to ready state
    setLottieReady(true);

    // Cleanup
    return () => {
      player.removeEventListener("load", handleLoad);
      player.removeEventListener("ready", handleLoad);
      setLottieReady(false);
    };
  }, [libLoaded, onReady, onLoad, id, isInteractive]);

  return (
    <motion.div style={{ position: "relative" }}>
      <motion.div
        animate={{ opacity: lottieReady ? 0 : 1 }}
        transition={{ opacity: { duration: 0.4 } }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={placeholderImage}
          alt="Loading animation"
          width={800}
          height={800}
          className={className}
          style={style}
        />
      </motion.div>
      <motion.div
        animate={{ opacity: lottieReady ? 1 : 0 }}
        transition={{ opacity: { duration: 0.4 } }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: lottieReady ? "auto" : "none",
        }}
      >
        <lottie-player
          ref={playerRef as React.Ref<HTMLElement>}
          id={id}
          src={src}
          className={className}
          style={style}
          {...(autoplay ? { autoplay: true } : {})}
          {...(loop ? { loop: true } : {})}
          {...(controls ? { controls: true } : {})}
        />
      </motion.div>
    </motion.div>
  );
}
