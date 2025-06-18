"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";
import Lottie from "react-lottie-player";

interface StepAnimationProps {
  animation: {
    src: string;
  };
  className?: string;
  // containerRef: React.RefObject<HTMLDivElement>;
}

export const StepAnimation: React.FC<StepAnimationProps> = ({
  animation,
  className = "",
  // containerRef,
}) => {
  const dotLottieRef = useRef<DotLottie | null>(null);
  const isDotLottie = useMemo(
    () => animation.src.endsWith(".lottie"),
    [animation.src]
  );
  const hasPlayedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize expensive calculations
  const inViewOptions = useMemo(() => ({ amount: 0.8 }), []);
  const isInView = useInView(containerRef, inViewOptions);

  const [animationData, setAnimationData] = useState<Record<string, unknown>>();
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // Load JSON animation data
  useEffect(() => {
    if (!isDotLottie && !animationData) {
      fetch(animation.src)
        .then((res) => res.json())
        .then((data) => {
          setAnimationData(data);
          setIsAnimationReady(true);
        })
        .catch(console.error);
    }
  }, [animation.src, isDotLottie, animationData]);

  // For dotLottie animations
  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
    if (dotLottie) {
      dotLottieRef.current = dotLottie;

      // Initialize at first frame
      dotLottie.stop();
      setIsAnimationReady(true);

      // Listen for completion to stop at last frame
      const handleComplete = () => {
        hasPlayedRef.current = true;
      };
      dotLottie.addEventListener("complete", handleComplete);

      // // If already in view when loaded, play
      if (isInView && !hasPlayedRef.current) {
        dotLottie.play();
      }

      // dotLottie.play();

      // Cleanup function will be called by dotLottieRef.current cleanup
      return () => {
        dotLottie.removeEventListener("complete", handleComplete);
      };
    }
  };

  // Handle play state changes for dotLottie
  useEffect(() => {
    if (isDotLottie && isAnimationReady && dotLottieRef.current) {
      if (isInView && !hasPlayedRef.current) {
        dotLottieRef.current.play();
      }
    }
  }, [isInView, isAnimationReady, isDotLottie]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[70vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-lg ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isDotLottie ? (
          // dotLottie implementation
          <DotLottieReact
            src={animation.src}
            loop={false}
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
          />
        ) : (
          // JSON implementation
          animationData && (
            <Lottie
              loop={false}
              play={isInView && isAnimationReady && !hasPlayedRef.current}
              animationData={animationData}
              onComplete={() => {
                hasPlayedRef.current = true;
              }}
              style={{ width: "100%", height: "100%" }}
            />
          )
        )}
      </motion.div>
    </div>
  );
};
