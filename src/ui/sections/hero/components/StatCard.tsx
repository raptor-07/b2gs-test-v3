"use client";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces]
  );

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-mint-950",
        className
      )}
      {...props}
    >
      {startValue}
    </span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-row sm:flex-row lg:flex-col items-center lg:items-start gap-2 sm:gap-4">
      <div className="flex text-2xl min-w-[70px] lg:text-5xl font-normal text-mint-950">
        <NumberTicker value={value} />
        <span>%</span>
      </div>
      <p className="sm:text-left lg:text-left text-sm lg:text-base text-mint-950 w-auto lg:max-w-[200px]">
        {label}
      </p>
    </div>
  );
}
