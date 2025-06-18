"use client";

import ExploreProcessButton from "@/components/buttons/explore-process";
import SecondaryButton from "@/components/buttons/secondary-button";

export function ContentSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-lime-100 leading-tight tracking-tight">
        Interconnected Sustainability Intelligence
      </h2>
      <p className="text-base md:text-base lg:text-md text-lime-100">
        Our ecosystem integrates sustainability across various stages of
        recycling to provide a comprehensive view.
      </p>
      <div className="flex flex-wrap items-start sm:items-center gap-2">
        <ExploreProcessButton />
        <SecondaryButton className="h-10 w-auto bg-gray-200 text-gray-600 transition-colors duration-300 hover:gray-300">
          <p className=" text-sm text-nowrap">Discover Features</p>
        </SecondaryButton>
      </div>
    </div>
  );
}
