"use client";

import React from "react";
import { motion } from "motion/react";

interface Props {
  total: number;
  current: number;
}

export default function ProgressBar({ total, current }: Props) {
  const segments = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="flex gap-2 w-full max-w-[200px]">
      {segments.map((index) => (
        <div
          key={index}
          className="h-1 flex-1 rounded-full overflow-hidden bg-green-100"
        >
          {current === index && (
            <motion.div
              className="w-full h-full bg-lime-400"
              layoutId="activeSegment"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
