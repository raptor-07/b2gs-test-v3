"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { DashboardFragment } from "./types";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
  fragment: DashboardFragment;
}

export default function DashboardFragment({ fragment }: Props) {
  const { image, gridPosition } = fragment;
  const { rowStart, rowEnd, colStart, colSpan } = gridPosition;
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden flex items-center justify-center touch-none"
      initial={{
        transform: "translate3d(-10px, 0px, 8px)",
        opacity: 0,
      }}
      animate={{
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        delay: Math.random(),
      }}
      style={{
        gridRow: `${rowStart} / ${rowEnd}`,
        gridColumn: `${colStart} / span ${colSpan}`,
      }}
      whileHover={
        !isMobile
          ? {
              transform: "translate3d(-1px, 0, 1px)",
              transition: { duration: 0.5 },
            }
          : {}
      }
      whileTap={{
        transform: "translate3d(0, 0, 2px)",
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        className="relative h-full w-full flex items-center justify-center cursor-pointer select-none"
        onContextMenu={(e) => e.preventDefault()}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={image}
          alt="Dashboard fragment"
          width={1000}
          height={1000}
          className="object-contain w-full h-full"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          priority
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
