"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import SectorCard from "./sector-card";
import ProgressBar from "./progress-bar";
import { sectorData } from "./types";

const swipeConfidenceThreshold = 200; // Increased threshold
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const minSwipeDistance = 50;

// Wrap number around boundaries
const wrap = (min: number, max: number, value: number): number => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function SectorCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const sectorIndex = wrap(0, sectorData.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    // Check if vertical movement is greater than horizontal
    if (Math.abs(offset.y) > Math.abs(offset.x)) {
      return; // Ignore swipe if vertical movement is dominant
    }

    // Only register swipe if minimum distance is met
    if (Math.abs(offset.x) < minSwipeDistance) {
      return;
    }

    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div className="relative h-[80vh] sm:h-[100vh] lg:h-[90vh] xl:h-[80vh] 3xl:h-[80vh] 4xl:h-[70vh] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            dragDirectionLock
            onDragEnd={handleDragEnd}
            initial={{ x: direction > 0 ? 1000 : -1000 }}
            animate={{ x: 0 }}
            exit={{ x: direction < 0 ? 1000 : -1000 }}
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
            }}
            className="bg-lime-100 rounded-xl absolute inset-0 flex items-start justify-center px-4 lg:px-0"
          >
            <SectorCard sector={sectorData[sectorIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 w-full flex flex-col-reverse items-center gap-8 z-10">
        {/* Progress Bar - Now below buttons */}
        <ProgressBar total={sectorData.length} current={sectorIndex} />

        {/* Navigation Buttons */}
        <div className="flex gap-6">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-100/90 transition-colors"
            aria-label="Previous sector"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-lime-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-100/90 transition-colors"
            aria-label="Next sector"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-lime-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
