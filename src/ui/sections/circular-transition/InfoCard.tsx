"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { useMotionValue, useSpring } from "motion/react";

// Dynamically import the ParticlesBackground for client-side only
const ParticlesBackground = dynamic(
  () => import("@/ui/sections/hero/components/particles/ParticlesBackground"),
  { ssr: false }
);

interface InfoCardProps {
  title: string;
  number: number;
  description: string;
  particleConfigs: unknown[];
}

function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  className,
}: {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
  className?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!spanRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(spanRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value);
      }, delay * 1000);
    }
  }, [motionValue, inView, delay, value, direction, startValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    });
  }, [springValue, decimalPlaces]);

  return (
    <span
      ref={spanRef}
      className={cn(
        "inline-block tabular-nums tracking-wider text-mint-400 text-3xl font-bold",
        className
      )}
    >
      {startValue}
    </span>
  );
}

export function InfoCard({
  title,
  number,
  description,
  particleConfigs,
}: InfoCardProps) {
  const [hovered, setHovered] = useState(false);

  // Pick a random config on mount
  const [config] = useState(() =>
    particleConfigs.length > 0
      ? particleConfigs[Math.floor(Math.random() * particleConfigs.length)]
      : undefined
  );

  return (
    <div
      className="w-60 h-40 bg-white rounded-xl shadow-md flex flex-col items-center justify-center relative overflow-hidden border border-gray-100 transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     
      {hovered && config && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-expect-error: ParticlesBackground may not type config */}
          <ParticlesBackground config={config} />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <span className="text-mint-950 text-base font-semibold">{title}</span>
        <NumberTicker value={number} />
        <span className="text-mint-950 text-sm text-center">{description}</span>
      </div>
    </div>
  );
}
