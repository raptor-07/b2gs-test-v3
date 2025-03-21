"use client";

import React from "react";
import { useInView } from "framer-motion";
import DashboardFragment from "./dashboard-fragment";

import {
  dashboardConfig,
  type DashboardFragment as DashboardFragmentType,
} from "./types";

export default function DashboardSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="w-full bg-brown-100 text-green-100">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-12 py-4 -mt-6 md:mt-0 md:my-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-0">
          {/* Heading Section */}
          <div className="flex flex-grow flex-col gap-4 lg:gap-8 items-center md:items-start text-center md:text-left md:max-w-[40vw] lg:max-w-[45vw] 3xl:max-w-[800px] md:my-8">
            <h2 className="text-4xl md:text-5xl 3xl:text-7xl font-lexend leading-tight">
              Sustainable Recycling
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light">
              Tracked, Measured, and Transparently Reported
            </h3>
            <p className="text-base md:text-md lg:text-lg">
              We rigorously track all waste management metrics, providing full
              transparency and verification, empowering organizations to meet
              sustainability and emissions targets.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div
            ref={ref}
            className="relative md:w-[900px] 3xl:w-[1000px]"
            style={{
              perspective: "100px",
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <div
              className="grid grid-cols-12 gap-2 md:gap-4 lg:gap-6 p-4 md:p-6 lg:p-8 rounded-xl h-full"
              style={{
                transformStyle: "preserve-3d",
                gridAutoRows: "minmax(min-content, auto)",
              }}
            >
              {dashboardConfig.fragments.map(
                (fragment: DashboardFragmentType, index: number) => (
                  <DashboardFragment key={index} fragment={fragment} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
