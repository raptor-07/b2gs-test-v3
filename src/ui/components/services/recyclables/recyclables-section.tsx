"use client";

import React from "react";
import InfiniteBanner from "./infinite-banner";

export default function RecyclablesSection() {
  return (
    <section className="w-full bg-brown-100 py-16 lg:py-36 text-green-100">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex flex-wrap">
          {/* Header content with padding */}
          <div className="w-full lg:w-1/2 px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl lg:text-6xl font-lexend md:text-left">
                Materials Range
              </h2>
              <p className="text-lg md:text-2xl md:text-left max-w-3xl">
                Here&apos;s a comprehensive display of most common scrap
                materials that we can manage and process sustainably
              </p>
            </div>
          </div>

          {/* Infinite banner */}
          <div className="w-full lg:w-1/2">
            <InfiniteBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
