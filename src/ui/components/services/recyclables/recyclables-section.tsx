"use client";

import React from "react";
import InfiniteBanner from "./infinite-banner";

export default function RecyclablesSection() {
  return (
    <section className="w-full bg-brown-100 py-16 lg:py-24 text-green-100">
      <div className="max-w-[2000px] mx-auto">
        {/* Header content with padding */}
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-6 text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-lexend md:text-left">
              Materials Range
            </h2>
            <p className="text-lg md:text-2xl md:text-left max-w-3xl">
              Here&apos;s a comprehensive display of most common scrap materials
              that we can manage and process sustainably
            </p>
          </div>
        </div>

        {/* Full width infinite banner */}
        <div className="w-full">
          <InfiniteBanner />
        </div>
      </div>
    </section>
  );
}
