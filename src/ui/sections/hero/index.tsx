"use client";

import { cn } from "@/utils/cn";
import { Container } from "@/components/layout";
import { ContentSection } from "./components/ContentSection";
import { StatsSection } from "./components/StatsSection";
import { EarthAnimation } from "./components/EarthAnimation";
import ParticlesBackground from "./components/particles/ParticlesBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full py-8 bg-paper-100 dark:bg-mint-900 overflow-hidden">
      <ParticlesBackground />
      <Container className="relative z-10 xl:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-2">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <ContentSection />
          </div>

          {/* Animation */}
          <div className="relative lg:row-span-2 flex items-center justify-center">
            <EarthAnimation
              className={cn(
                "w-full max-w-[400px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[500px]"
              )}
            />
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
