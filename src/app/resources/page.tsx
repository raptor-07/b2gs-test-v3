import { Metadata } from "next";
import { ResourcePageHeader } from "@/ui/components/resources/header/ResourcePageHeader";
import { ResourcesContent } from "@/ui/components/resources/content/ResourcesContent";
import { getAllResources } from "@/lib/resources/api";
import FindUsSection from "@/ui/components/home/find-us-section";

export const metadata: Metadata = {
  title: "Resources | B2G Solutions",
  description:
    "Stay ahead of the curve with expert content on Circularity, EPR regulations, sustainability practices, and industry trends.",
};

export default function Resources() {
  const resources = getAllResources();

  return (
    <main>
      <div className="bg-brown-100">
        <ResourcePageHeader />
        <ResourcesContent resources={resources} category="all" />
        <FindUsSection />
      </div>
    </main>
  );
}
