import { Suspense } from "react";
import { cn } from "@/utils/cn";

interface LottieSkeletonProps {
  className?: string;
}

function LottieSkeleton({ className }: LottieSkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg",
        className
      )}
    />
  );
}

interface LottieWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function LottieWrapper({ children, className }: LottieWrapperProps) {
  return (
    <div className={cn("relative", className)}>
      <Suspense fallback={<LottieSkeleton className={className} />}>
        {children}
      </Suspense>
    </div>
  );
}
