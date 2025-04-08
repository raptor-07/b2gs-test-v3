"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "motion/react";
import { DotLottieReact, DotLottie } from "@lottiefiles/dotlottie-react";

interface DotLottieProps {
  src: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const DotLottiePlayer: React.FC<DotLottieProps> = ({
  src,
  className,
  onLoad,
  onError,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 1 });
  const [lottie, setLottie] = useState<DotLottie | null>(null);
  const [hasError, setHasError] = useState(false);

  // Handle errors and cleanup
  const handleError = useCallback(() => {
    setHasError(true);
    console.error("Failed to load Lottie animation:", src);
    onError?.();
  }, [src, onError]);

  // Handle animation loading
  const dotLottieRefCallback = useCallback(
    (ref: DotLottie | null) => {
      if (ref) {
        setLottie(ref);
        onLoad?.();
      }
    },
    [onLoad]
  );

  // Handle animation playback
  useEffect(() => {
    if (!lottie) return;

    try {
      if (isInView) {
        lottie.play();
      } else {
        lottie.stop();
      }
    } catch (err) {
      console.error("Animation playback error:", err);
      handleError();
    }
  }, [lottie, isInView, handleError]);

  // Reset states when src changes
  useEffect(() => {
    setHasError(false);
    setLottie(null);

    return () => {
      if (lottie) {
        try {
          lottie.stop();
        } catch (error) {
          console.error("Error cleaning up animation:", error);
        }
      }
    };
  }, [src, lottie]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className ?? ""}`}>
      {!hasError ? (
        <DotLottieReact
          src={src}
          loop={false}
          dotLottieRefCallback={dotLottieRefCallback}
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-brown-700/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span className="text-sm">Failed to load animation</span>
        </div>
      )}
    </div>
  );
};

export default DotLottiePlayer;
