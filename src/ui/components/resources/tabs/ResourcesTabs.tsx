"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

const tabsList = [
  { name: "all", path: "/resources" },
  { name: "blogs", path: "/resources/blogs" },
  { name: "news", path: "/resources/news" },
  { name: "case-studies", path: "/resources/case-studies" },
];

export function ResourcesTabs({ category = "all" }: { category: string }) {
  const router = useRouter();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative -mx-4 md:mx-0">
      <div className="">
        <div className="flex overflow-x-auto scrollbar-none scroll-smooth snap-x md:overflow-visible md:space-x-4 justify-evenly md:justify-start">
          {tabsList.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.path)}
              className={cn(
                // Base styles
                "whitespace-nowrap rounded-lg transition-colors snap-start",
                // Mobile & tablet styles
                "min-w-fit px-2 py-2 text-sm mr-2",
                // Desktop styles (md+)
                "md:px-4 md:py-4 md:text-base md:mr-0",
                // Active/Hover states
                category === tab.name
                  ? "text-green-100 bg-brown-200"
                  : "text-gray-600 hover:text-gray-500"
              )}
            >
              {tab.name === "all"
                ? "All Resources"
                : tab.name.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
