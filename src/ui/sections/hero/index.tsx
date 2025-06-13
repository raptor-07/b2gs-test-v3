"use client";

import { cn } from "@/utils/cn";
import { Container } from "@/components/layout";
import { ContentSection } from "./components/ContentSection";
import { StatsSection } from "./components/StatsSection";
import { EarthAnimation } from "./components/EarthAnimation";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-80px)]">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <ContentSection />
          </div>

          {/* Animation */}
          <div className="relative lg:row-span-2 flex items-center justify-center">
            <EarthAnimation className={cn("w-full max-w-[800px]")} />
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <StatsSection />
          </div>
        </div>
      </Container>
    </section>
  );
}
