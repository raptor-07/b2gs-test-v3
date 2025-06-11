"use client";

import { cn } from "@/utils/cn";
import { Container } from "../../../components/layout";
import { ContentSection } from "./components/ContentSection";
import {
  LottiePlayer,
  LottieWrapper,
  usePreloadAnimation,
} from "@/components/lottie";
import { StatsSection } from "./components/StatsSection";
import { useState } from "react";

const EARTH_ANIMATION_URL = "/assets/lottie/earth.json";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the earth animation
  usePreloadAnimation(EARTH_ANIMATION_URL);

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
            <LottieWrapper
              aspectRatio="1/1"
              className="w-full max-w-[600px]"
              skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
            >
              <div
                className={cn(
                  "w-full h-full transition-all duration-700",
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
              >
                <LottiePlayer
                  animationUrl={EARTH_ANIMATION_URL}
                  className="w-full h-full"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </LottieWrapper>
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
