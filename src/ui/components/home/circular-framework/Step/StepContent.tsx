"use client";

import { StepTitle } from "./StepTitle";
import { StepPoints } from "./StepPoints";
// import { StepAnimation } from "../animations/StepAnimation";
import type { StepData } from "../animations/types";
import { useIsMobile } from "/hooks/useIsMobile";
import Image from "next/image";
import dynamic from "next/dynamic";

interface StepContentProps {
  data: StepData;
  stepRef: React.RefObject<HTMLDivElement>;
}

const StepAnimation = dynamic(
  () =>
    import(
      "../../../../../ui/components/home/circular-framework/animations/StepAnimation"
    ).then((mod) => mod.StepAnimation),
  {
    ssr: false,
  }
);

export const StepContent: React.FC<StepContentProps> = ({ data, stepRef }) => {
  const isMobile = useIsMobile();
  return (
    <div className="mb-8 sm:mb-20 md:mb-24 lg:mb-24 xl:mb-16 2xl:mb-32 last:mb-0">
      <StepTitle number={data.number} title={data.title} />
      <StepPoints points={data.points} />
      {isMobile ? (
        <div>
          <Image
            src={data.mobileImage.src}
            alt="Step Animation"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div
          className="w-full h-[70vh] md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-lg"
          ref={stepRef}
        >
          <StepAnimation animation={data.animation} />
        </div>
      )}
    </div>
  );
};
