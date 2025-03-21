"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import { cn } from "@/utils/cn";
import { useMemo } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  progress,
}: {
  words: string;
  className?: string;
  progress: MotionValue<number>;
}) => {
  const wordsArray = useMemo(() => words.split(" "), [words]);

  // Single transform function that returns array of opacities
  const opacities = useTransform(progress, (latest) => {
    return wordsArray.map((_, idx) => {
      // Scale everything to complete by 0.75 progress
      const scaledLatest = Math.min(latest / 0.75, 1);
      const start = idx / wordsArray.length;
      const end = (idx + 1) / wordsArray.length;

      if (scaledLatest <= start) return 0;
      if (scaledLatest >= end) return 1;
      return (scaledLatest - start) / (end - start);
    });
  });

  return (
    <div className={cn(className)}>
      <div className="leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <React.Fragment key={word + idx}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: opacities.get()[idx] ?? 0 }}
              className="text-brown-700 inline-block"
            >
              {word}
            </motion.span>{" "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
