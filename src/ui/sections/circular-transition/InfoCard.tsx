"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the ParticlesBackground for client-side only
const ParticlesBackground = dynamic<{ config: object }>(
  () => import("@/ui/sections/hero/components/particles/ParticlesBackground"),
  { ssr: false }
);

import { GradientText } from "@/ui/sections/hero/components/GradientText";

interface InfoCardProps {
  title: string;
  number: string;
  description: string;
  particleConfigs: object[];
}

/* NumberTicker removed: number is now a string and uses GradientText */

export function InfoCard({
  title,
  number,
  description,
  particleConfigs,
}: InfoCardProps) {
  const [hovered, setHovered] = useState(false);

  // Pick a random config on mount
  const [config] = useState<object | undefined>(() =>
    particleConfigs.length > 0
      ? particleConfigs[Math.floor(Math.random() * particleConfigs.length)]
      : undefined
  );

  return (
    <div
      className="bg-paper-200 rounded-xl shadow-md flex flex-col items-start justify-center relative overflow-hidden border border-gray-100 transition-transform hover:scale-105 p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && config && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackground config={config} />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-start gap-1 w-full">
        <span className="text-mint-950 text-base font-semibold">{title}</span>
        <GradientText className="text-3xl font-bold">{number}</GradientText>
        <span className="text-mint-950 text-sm">{description}</span>
      </div>
    </div>
  );
}
