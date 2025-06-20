"use client";

import { useRef, useState } from "react";
import { ChallengeCard } from "@/ui/sections/challenges/components/ChallengeCard";

const challenges = [
  {
    title: "Lack of Traceability and Trackability",
    description: [
      "Current systems lack visibility into waste flows and it's lifecycle beyond point-of-sale.",
      "Monitoring vendor actions and verifying material movement remains complex.",
    ],
    animation: "/assets/lottie/reach.json",
    iconLottie: "/assets/lottie/tracetrack.json",
    placeholderImage: "/assets/challenges/reach.svg",
    iconPlaceholderImage: "/assets/challenges/tracetrack.svg",
  },
  // {
  //   title: "Carbon Intensive Recycling",
  //   description: [
  //     "Carbon intensive logistics and freight make traditional recycling unsustainable.",
  //     "Harmful disposal of hard-to-recycle materials drives high end-of-life emissions.",
  //   ],
  //   animation: "/assets/lottie/smoke.json",
  //   iconLottie: "/assets/lottie/recycle.json",
  //   placeholderImage: "/assets/challenges/smoke.svg",
  //   iconPlaceholderImage: "/assets/challenges/recycle.svg",
  // },
  // {
  //   title: "Absence of a Unified Marketplace ",
  //   description: [
  //     "Lack of integration between scrap producers and material consumers causes misalignment.",
  //     "Lack of verification and grading for green recycled materials hinders circularity adoption.",
  //   ],
  //   animation: "/assets/lottie/smoke.json",
  //   iconLottie: "/assets/lottie/recycle.json",
  //   placeholderImage: "/assets/challenges/smoke.svg",
  //   iconPlaceholderImage: "/assets/challenges/recycle.svg",
  // },
];

export function ChallengesGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(
            container.scrollLeft + scrollAmount,
            container.scrollWidth - container.clientWidth
          );

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Navigation Buttons for MD screens */}
      <div className="hidden md:block lg:hidden absolute -left-4 -right-4 top-0 bottom-0 pointer-events-none">
        {/* Left Button - Always visible */}
        <button
          onClick={() => scroll("left")}
          className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/30 text-white rounded-r-lg p-2 transition-colors cursor-pointer"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {/* Right Button - Always visible */}
        <button
          onClick={() => scroll("right")}
          className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/30 text-white rounded-l-lg p-2 transition-colors cursor-pointer"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Cards Container */}
      <div className="px-4 md:px-0">
        <div
          ref={scrollContainerRef}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
          onTouchEnd={() => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            const isSwipe = Math.abs(distance) > 50;
            if (isSwipe) {
              scroll(distance > 0 ? "right" : "left");
            }
            setTouchStart(0);
            setTouchEnd(0);
          }}
          className="
            flex flex-col gap-4
            sm:flex-col
            md:flex-row md:overflow-x-auto md:scroll-smooth md:snap-x md:snap-mandatory
            lg:grid lg:grid-cols-3 lg:overflow-visible
            scrollbar-hide
          "
        >
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="w-full md:min-w-[50%] lg:min-w-0 md:snap-center"
            >
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                animationUrl={challenge.animation}
                iconLottieUrl={challenge.iconLottie}
                placeholderImage={challenge.placeholderImage}
                iconPlaceholderImage={challenge.iconPlaceholderImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
