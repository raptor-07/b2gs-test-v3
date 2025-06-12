import { Suspense } from "react";
import { cn } from "@/utils/cn";

interface LottieSkeletonProps {
  className?: string;
  aspectRatio?: string;
  skeletonClassName?: string;
}

function LottieSkeleton({
  className,
  aspectRatio = "1/1",
  skeletonClassName,
}: LottieSkeletonProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div
        className={cn(
          "absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg",
          "before:content-[''] before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:animate-[shimmer_2s_infinite]",
          skeletonClassName
        )}
        style={{
          aspectRatio,
        }}
      />
    </div>
  );
}

interface LottieWrapperProps {
  children: React.ReactNode;
  className?: string;
  aspectRatio?: string;
  skeletonClassName?: string;
}

export function LottieWrapper({
  children,
  className,
  aspectRatio,
  skeletonClassName,
}: LottieWrapperProps) {
  const styles = {
    aspectRatio: aspectRatio || undefined,
  };

  return (
    <div className={cn("relative", className)} style={styles}>
      <Suspense
        fallback={
          <LottieSkeleton
            className={className}
            aspectRatio={aspectRatio}
            skeletonClassName={skeletonClassName}
          />
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
