"use client";

import { Carousel } from "../preview/Carousel";
import { ReachOutCard } from "./ReachOutCard";
import type { Resource } from "@/lib/resources/types";

interface RelatedSectionProps {
  relatedResources: Resource[];
  category: string;
}

export function RelatedSection({ relatedResources, category }: RelatedSectionProps) {
  if (relatedResources.length === 0) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReachOutCard />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Related Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            More {category.split("-").map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(" ")}
          </h2>
          <div className="mb-16">
            <Carousel items={relatedResources} />
          </div>
        </div>
      </div>

      {/* Reach Out Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReachOutCard />
        </div>
      </div>
    </>
  );
}
