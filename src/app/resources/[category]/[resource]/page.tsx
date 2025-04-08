import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceHeader } from "@/ui/components/resources/header/ResourceHeader";
import { RelatedSection } from "@/ui/components/resources/related/RelatedSection";
import { Navbar } from "../../../../ui/components/navbar";
import FindUsSection from "../../../../ui/components/home/find-us-section";
import {
  getResourceBySlug,
  getRelatedResources,
  getResourceStaticParams,
} from "../../../../lib/resources/api";
import markdownToHtml from "../../../../lib/resources/markdownToHtml";

interface ResourcePageProps {
  params: {
    category: string;
    resource: string;
  };
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const resource = getResourceBySlug(params.category, params.resource);

  if (!resource) {
    return notFound();
  }

  return {
    title: `${resource.title} | B2G Solutions`,
    description: resource.excerpt,
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
      images: [resource.ogImage.url],
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resource = getResourceBySlug(params.category, params.resource);

  if (!resource) {
    return notFound();
  }

  const htmlContent = await markdownToHtml(resource);
  const relatedResources = getRelatedResources(
    params.category,
    params.resource
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white">
        <ResourceHeader />

        {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-headings:font-semibold prose-headings:text-text-brown-01 prose-p:text-text-brown-01 prose-li:text-text-brown-01 prose-strong:text-text-brown-01 prose-em:text-text-brown-01 mx-auto">
          <div
            className="[&>*]:mb-6 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {/* Related Section */}
      <div className="border-t border-gray-200">
        {/* Related Resources Section */}
        <section className="py-16">
          <RelatedSection
            relatedResources={relatedResources}
            category={resource.category}
          />
        </section>
      </div>
      </div>
      <FindUsSection />
    </div>
  );
}

export function generateStaticParams() {
  return getResourceStaticParams();
}
