"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { SectorData } from "./types";

interface Props {
  sector: SectorData;
  isVisible?: boolean;
}

export default function SectorCard({ sector, isVisible = true }: Props) {
  return (
    <motion.div
      className="overflow-hidden w-full max-w-[90vw] lg:max-w-[600px] relative group my-12 sm:my-4 lg:my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <div className="p-6 md:px-8 flex flex-col gap-6">
        {/* Header Row */}
        <div className="flex flex-col items-start gap-6 lg:gap-2 xl-gap-4">
          {/* Icon - Left Aligned */}
          <div className="w-[20%] sm:w-[10%] lg:w-[10%] aspect-square relative flex-shrink-0">
            <Image
              src={sector.illustration}
              alt={sector.heading}
              fill
              sizes="(max-width: 768px) 20vw, 10vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h3 className="flex-1 text-2xl md:text-3xl font-lexend text-green-100">
            {sector.heading}
          </h3>
        </div>

        {/* Points List */}
        <ul className="space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8 gap-3 lg:gap-2 xl:gap-2 3xl:gap-4">
          {sector.points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              className="flex items-start gap-3  text-green-100"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-green-100 flex-shrink-0" />
              <span
                className="text-base sm:text-md 
             md:text-base lg:text-base xl:text-md 3xl:text-lg"
              >
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
