export interface Resource {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: ResourceCategory;
  slug: string;
  content: string;
  googlePageId?: string;
  ogImage: {
    url: string;
  };
}

export type ResourceCategory = "blogs" | "news" | "case-studies" | "all";

export interface PostByCategory {
  blogs: Resource[];
  news: Resource[];
  "case-studies": Resource[];
}

export interface ResourceMeta {
  isEmpty: boolean;
  totalCount: number;
  resources: Resource[];
}
