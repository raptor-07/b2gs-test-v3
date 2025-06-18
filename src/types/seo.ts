import { type Metadata } from "next";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  noIndex = false,
}: SEOProps): Metadata {
  return {
    // Title
    ...(title && {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
    }),

    // Description
    ...(description && { description }),

    // Keywords
    ...(keywords?.length && { keywords: keywords.join(", ") }),

    // OpenGraph
    openGraph: {
      ...(title && { title }),
      ...(description && { description }),
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      ...(title && { title }),
      ...(description && { description }),
      ...(ogImage && { images: [ogImage] }),
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
