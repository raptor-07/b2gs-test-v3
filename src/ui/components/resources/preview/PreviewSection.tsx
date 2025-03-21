import { Resource, ResourceCategory } from "@/lib/resources/types";
import { PreviewCard } from "./PreviewCard";
import { EmptyState } from "./EmptyState";

interface PreviewSectionProps {
  resources: Resource[];
  category: Exclude<ResourceCategory, "all">;
}

export function PreviewSection({ resources, category }: PreviewSectionProps) {
  if (resources.length === 0) {
    return <EmptyState category={category} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <PreviewCard
            key={`${resource.category}-${resource.slug}`}
            title={resource.title}
            excerpt={resource.excerpt}
            coverImage={resource.coverImage}
            date={resource.date}
            category={resource.category}
            slug={resource.slug}
          />
        ))}
      </div>
    </div>
  );
}
