"use client";

import { BackgroundGradient } from "@/ui/components/gradient";
// import { cn } from "@/utils/cn";
import dynamic from "next/dynamic";
import Container from "../../../../ui/components/container";

const LottieEarthAnimation = dynamic(() => import("./LottieEarthAnimation"), {
  ssr: false,
});

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Container className={className}>
        <div className="w-full lg:my-12 flex items-center justify-center">
          <BackgroundGradient>
            <div className="relative w-full h-full flex flex-col items-center justify-evenly">
              {/* Text content */}
              <div className="p-4 sm:p-6 text-brown-100 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl bg-clip-text">
                  Championing{" "}
                  <span className="text-green-100">Circular Economy</span>, One
                  Scrap at a Time.
                </h1>
              </div>

              {/* Lottie animation container */}
              <LottieEarthAnimation />
              <LottieEarthAnimation />
            </div>
          </BackgroundGradient>
        </div>
      </Container>
    </Container>
  );
};

export default HeroSection;
