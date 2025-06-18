"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SuccessNotificationProps {
  message: string;
  onClose: () => void;
}

const notificationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
};

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  message,
  onClose,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={notificationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="notification-container rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(22, 163, 74, 0.9)", // green-600 with opacity
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex items-center gap-2 text-white px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm flex-1">{message}</span>
          <button
            onClick={onClose}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
