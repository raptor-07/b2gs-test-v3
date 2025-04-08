"use client";

import { useRef, useEffect, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { PreviewCard } from "./PreviewCard";
import { cn } from "../../utils/cn";

interface CarouselProps {
  items: Array<{
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    category: string;
    slug: string;
  }>;
  className?: string;
}

export function Carousel({ items, className }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const screenSize = useScreenSize();

  const itemsToShow = {
    mobile: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
    "2xl": 3,
    "3xl": 3,
    "4xl": 3,
  }[screenSize];

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = container.clientWidth;
    
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <div className={cn("relative group", className)}>
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous slides"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next slides"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="flex space-x-6"
          style={{
            width: `${items.length * (100 / itemsToShow)}%`,
            minWidth: "100%",
          }}
        >
          {items.map((item) => (
            <div
              key={`${item.category}-${item.slug}`}
              className="flex-1 min-w-0"
              style={{ flexBasis: `${100 / itemsToShow}%` }}
            >
              <PreviewCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
