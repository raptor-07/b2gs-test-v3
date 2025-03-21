"use client";

import { BackgroundGradient } from "@/ui/components/gradient";
import { cn } from "@/utils/cn";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
});

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", className)}>
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
            <LottieAnimation />
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default HeroSection;
