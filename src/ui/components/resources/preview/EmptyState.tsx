import { ResourceCategory } from "@/lib/resources/types";

interface EmptyStateProps {
  category: Exclude<ResourceCategory, "all">;
}

const emptyStateMessages = {
  blogs: "Our experts are crafting informative articles on sustainability and circularity. Stay tuned for valuable insights coming your way.",
  news: "We're preparing to share our latest developments and milestones. Check back soon for updates on B2G's journey.",
  "case-studies": "Transformative sustainability stories are in the making. Return soon to explore real-world impact cases.",
};

export function EmptyState({ category }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-2xl">
        <h3 className="text-2xl font-semibold text-green-100 mb-4">
          {`Stay Tuned for ${category.split("-").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(" ")}`}
        </h3>
        <p className="text-lg text-green-100/80">
          {emptyStateMessages[category]}
        </p>
      </div>
    </div>
  );
}
