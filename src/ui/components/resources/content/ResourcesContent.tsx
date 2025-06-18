"use client";

import { Resource, ResourceCategory } from "@/lib/resources/types";
import { ResourcesTabs } from "../tabs/ResourcesTabs";
import { PreviewSection } from "../preview/PreviewSection";

interface ResourcesContentProps {
  resources: Resource[];
  category: ResourceCategory;
}

export function ResourcesContent({
  resources,
  category,
}: ResourcesContentProps) {
  return (
    <div className="bg-brown-100 min-h-screen p-8">
      {/* Main Content Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <ResourcesTabs category={category} />
        </div>

        {/* Resource Preview Grid */}
        <PreviewSection
          resources={resources}
          category={category === "all" ? "blogs" : category}
        />
      </div>
    </div>
  );
}
