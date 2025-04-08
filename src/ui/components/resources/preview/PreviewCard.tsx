import Image from "next/image";
import Link from "next/link";
import { cn } from "../../utils/cn";

interface PreviewCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
}

export function PreviewCard({
  title,
  excerpt,
  coverImage,
  date,
  category,
  slug,
  className,
}: PreviewCardProps) {
  return (
    <Link
      href={`/resources/${category}/${slug}`}
      className={cn(
        "group block rounded-lg overflow-hidden bg-white shadow-lg transition-transform duration-200 hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        <div className="mt-4 flex items-center text-green-100">
          <span className="text-sm font-medium">Read More</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
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
        </div>
      </div>
    </Link>
  );
}
