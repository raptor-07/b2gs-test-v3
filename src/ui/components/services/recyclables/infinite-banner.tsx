"use client";

import React from "react";
import Image from "next/image";
import { scrapMaterials, type Material } from "./types";
import { cn } from "@/utils/cn";

function MaterialCard({ material }: { material: Material }) {
  return (
    <div className="group relative w-36 h-48 flex-shrink-0 mx-2 lg:mx-4">
      <div className="flex flex-col items-center h-full">
        <div className="relative w-full aspect-square mb-2">
          <Image
            src={material.image}
            alt={material.name}
            fill
            className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100px, 100px"
          />
        </div>
        <p className="text-brown-700 font-lexend text-lg text-center px-1 text-nowrap">
          {material.name}
        </p>
      </div>
    </div>
  );
}

function MaterialStrip() {
  return (
    <div className="flex gap-16 items-center pl-8">
      {scrapMaterials.map((material, index) => (
        <MaterialCard key={`${material.name}-${index}`} material={material} />
      ))}
    </div>
  );
}

export default function InfiniteBanner() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative w-full my-20 xl:my-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex animate-scrollLeft [animation-duration:60s]",
          isHovered && "animate-none"
        )}
        style={{ width: "fit-content" }}
      >
        <MaterialStrip />
        <MaterialStrip />
      </div>
    </div>
  );
}
