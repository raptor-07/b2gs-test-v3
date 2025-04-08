"use client";

import { motion } from "motion/react";

interface StepPointsProps {
  points: string[];
}

export const StepPoints: React.FC<StepPointsProps> = ({ points }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 xl:mb-8 2xl:mb-2 3xl:mb-12">
    {points.map((point, index) => (
      <motion.div
        key={index}
        className="flex items-start text-brown-700 text-base sm:text-lg md:text-lg xl:text-xl 3xl:text-xl 4xl:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <svg
          className="flex-shrink-0 w-4 h-4 mt-1 mr-3 text-brown-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
        <p className="leading-relaxed">{point}</p>
      </motion.div>
    ))}
  </div>
);
