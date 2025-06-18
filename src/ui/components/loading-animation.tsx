"use client";

import React from "react";
import { motion } from "motion/react";

interface LoadingAnimationProps {
  className?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  className,
  size = "medium",
  color = "var(--p-olive-300)",
}) => {
  const sizes = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full border-4 border-t-transparent`}
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const WithLoadingWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  loadingProps?: LoadingAnimationProps
) => {
  return function WithLoadingComponent(props: P & { isLoading?: boolean }) {
    const { isLoading, ...componentProps } = props;

    if (isLoading) {
      return <LoadingAnimation {...loadingProps} />;
    }

    return <WrappedComponent {...(componentProps as P)} />;
  };
};

export default LoadingAnimation;
