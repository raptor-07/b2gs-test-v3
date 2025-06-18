"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";

interface IdeaCardProps {
  heading: string;
  description: string;
  image: string;
  progress: MotionValue<number>;
  index: number;
  backgroundColor: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  heading,
  description,
  image,
  progress,
  index,
  backgroundColor,
}) => {
  const screenSize = useScreenSize();

  const transformValues = {
    0: "0%",
    1: useTransform(
      progress,
      [0.16, 0.35, 0.5, 1],
      {
        mobile: ["-2%", "-5%", "-12%", "-12%"],
        sm: ["-2%", "-3%", "-7%", "-7%"],
        md: ["-2%", "-5%", "-12%", "-12%"],
        lg: ["-2%", "-5%", "-12%", "-12%"],
        xl: ["-2%", "-12%", "-14%", "-16%"],
        "2xl": ["-2%", "-12%", "-16%", "-20%"],
        "3xl": ["-10%", "-15%", "-30%", "0%"],
        "4xl": ["-2%", "-25%", "0%", "0%"],
      }[screenSize],
      { clamp: true }
    ),
    2: useTransform(
      progress,
      [0.2, 0.6, 0.8, 1],
      {
        mobile: ["-10%", "-15%", "-20%", "-30%"],
        sm: ["-8%", "-8%", "-18%", "-8%"],
        md: ["-10%", "-15%", "-20%", "-30%"],
        lg: ["-10%", "-15%", "-20%", "-30%"],
        xl: ["-5%", "-20%", "-32%", "-40%"],
        "2xl": ["-20%", "-30%", "-40%", "-50%"],
        "3xl": ["-15%", "-35%", "-50%", "0%"],
        "4xl": ["-5%", "-50%", "0%", "0%"],
      }[screenSize],
      { clamp: true }
    ),
  };

  return (
    <motion.div
      style={{
        translateY: transformValues[index as keyof typeof transformValues],
        zIndex: index !== 0 ? index : 0,
      }}
      className={`${backgroundColor} h-[66.67vh] relative rounded-t-[30px] overflow-hidden`}
    >
      <div className="h-full w-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
        {/* Content Column */}
        <div className="w-full h-full md:w-[60vw] lg:w-[60vw] p-4 md:p-8 flex flex-col justify-evenly">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 text-brown-900">
            {heading}
          </h2>
          <div className="md:hidden lg:hidden w-full relative sm:flex sm:justify-center">
            <Image
              src={image}
              alt={heading}
              width={1024}
              height={1024}
              className="rounded-lg sm:w-[300px] sm:h-auto"
            />
          </div>
          <p className="text-md md:text-xl lg:text-xl text-brown-800 mb-6">
            {description}
          </p>
          <div className="flex items-center text-brown-900 cursor-pointer group">
            <span className="border-b border-brown-900 mr-2">Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        {/* Illustration Column - Hidden on mobile */}
        <div className="hidden w-[40vw] h-full relative md:flex lg:flex flex-col justify-center items-center">
          <Image
            src={image}
            alt={heading}
            width={1048}
            height={1048}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default IdeaCard;
