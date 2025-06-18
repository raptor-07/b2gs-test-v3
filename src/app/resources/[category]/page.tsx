import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePageHeader } from "@/ui/components/resources/header/ResourcePageHeader";
import { ResourcesContent } from "@/ui/components/resources/content/ResourcesContent";
import { getResourcesByCategory, getCategoryStaticParams } from "@/lib/resources/api";
import type { Resource, ResourceCategory } from "@/lib/resources/types";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = params.category;
  const validCategories = ["blogs", "news", "case-studies"];

  if (!validCategories.includes(category)) {
    return notFound();
  }

  const title = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | B2G Solutions`,
    description: `Explore our ${title.toLowerCase()} on sustainability, circularity, and EPR regulations.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const validCategories = ["blogs", "news", "case-studies"] as const;

  if (!validCategories.includes(category as typeof validCategories[number])) {
    notFound();
  }

  const resourcesByCategory = getResourcesByCategory();
  const resources = resourcesByCategory[category as keyof typeof resourcesByCategory] || [];

  return (
    <main>
      <ResourcePageHeader />
      <ResourcesContent
        resources={resources as Resource[]}
        category={category as ResourceCategory}
      />
    </main>
  );
}

export function generateStaticParams() {
  return getCategoryStaticParams();
}
