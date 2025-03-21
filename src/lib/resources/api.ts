import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Resource, PostByCategory } from "./types";

const resourcesDirectory = join(process.cwd(), "_resources");
const categoriesPath = {
  blogs: join(resourcesDirectory, "blogs"),
  news: join(resourcesDirectory, "news"),
  "case-studies": join(resourcesDirectory, "case-studies"),
};

export function getResourcesFileNamesByCategory() {
  return {
    blogs: fs.readdirSync(categoriesPath.blogs),
    news: fs.readdirSync(categoriesPath.news),
    "case-studies": fs.readdirSync(categoriesPath["case-studies"]),
  };
}

export function getResourceBySlug(category: string, slug: string): Resource {
  let categoryPath;
  switch (category) {
    case "blogs":
      categoryPath = categoriesPath.blogs;
      break;
    case "news":
      categoryPath = categoriesPath.news;
      break;
    case "case-studies":
      categoryPath = categoriesPath["case-studies"];
      break;
    default:
      throw new Error(`Invalid category: ${category}`);
  }

  const fullPath = join(categoryPath, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    category,
    slug,
    content,
  } as Resource;
}

export function getAllResources(): Resource[] {
  const fileNamesByCategory = getResourcesFileNamesByCategory();

  return Object.entries(fileNamesByCategory).flatMap(([category, files]) =>
    files
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        return getResourceBySlug(category, slug);
      })
      .sort((r1, r2) => (r1.date > r2.date ? -1 : 1))
  );
}

export function getResourcesByCategory(): PostByCategory {
  const fileNamesByCategory = getResourcesFileNamesByCategory();

  return Object.entries(fileNamesByCategory).reduce((acc, [category, files]) => {
    acc[category as keyof PostByCategory] = files
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        return getResourceBySlug(category, slug);
      })
      .sort((r1, r2) => (r1.date > r2.date ? -1 : 1));
    return acc;
  }, {} as PostByCategory);
}

export function getRelatedResources(
  category: string,
  currentSlug: string,
  limit: number = 3
): Resource[] {
  const resourcesByCategory = getResourcesByCategory();
  return (resourcesByCategory[category as keyof PostByCategory] || [])
    .filter((resource) => resource.slug !== currentSlug)
    .slice(0, limit);
}

export function getCategoryStaticParams() {
  return [
    { category: "blogs" },
    { category: "news" },
    { category: "case-studies" },
  ];
}

export function getResourceStaticParams() {
  const fileNamesByCategory = getResourcesFileNamesByCategory();

  return Object.entries(fileNamesByCategory).flatMap(([category, files]) =>
    files.map((fileName) => ({
      category,
      resource: fileName.replace(/\.md$/, ""),
    }))
  );
}
