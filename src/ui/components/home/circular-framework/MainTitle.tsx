"use client";

import React from "react";
import { motion } from "motion/react";

export const MainTitle = () => {
  return (
    <div className="my-8 sm:my-12 md:my-16 lg:my-20 xl:my-12 2xl:my-20 xl:mb-28 2xl:mb-36">
      <motion.h1
        className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-brown-700 font-semibold text-nowrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Circular Framework
      </motion.h1>
      <motion.p
        className="text-center mt-4 text-md sm:text-lg xl:text-2xl text-brown-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sustainable, Circular, and Compliant
      </motion.p>
    </div>
  );
};
