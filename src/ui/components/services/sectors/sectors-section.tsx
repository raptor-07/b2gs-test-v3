"use client";

import React from "react";
import SectorCarousel from "./sector-carousel";

interface SectorsSectionProps {
  attachReference?: React.RefObject<HTMLDivElement>;
}

export default function SectorsSection({
  attachReference,
}: SectorsSectionProps) {
  return (
    <section
      ref={attachReference}
      className="w-full min-h-[100vh] md:flex md:flex-col justify-center bg-olive-500 py-16 lg:py-4"
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center gap-12 items-stretch overflow-hidden">
          {/* Content */}
          <div className="w-full md:w-[40vw] flex flex-col justify-start overflow-hidden">
            <div className="max-w-[90%]">
              <h2 className="text-4xl lg:text-6xl 3xl:text-7xl font-lexend text-lime-300">
                We&apos;re present in these sectors
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-lime-100 text-wrap mt-4">
                We provide sustainable waste management services to a broad
                spectrum of industries and sectors.
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="w-full md:w-[50vw] min-h-[90vh] md:min-h-[70vh]">
            <SectorCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
