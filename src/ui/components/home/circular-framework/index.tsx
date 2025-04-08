"use client";

import { useEffect, useMemo, createRef } from "react";
import Container from "../../../../ui/components/container";
import { MainTitle } from "./MainTitle";
import { StepContent } from "./Step/StepContent";
import { STEPS_DATA } from "./animations/types";

interface CircularFrameworkProps {
  addRefs?: (refs: React.RefObject<HTMLDivElement>[]) => void;
}

const CircularFramework: React.FC<CircularFrameworkProps> = ({ addRefs }) => {
  // Initialize refs array only once using useMemo
  const sectionRefs = useMemo(
    () =>
      Array.from({ length: STEPS_DATA.length }, () =>
        createRef<HTMLDivElement>()
      ),
    [] // Empty deps since STEPS_DATA is constant
  );

  // Use useEffect with proper dependency for cleanup
  useEffect(() => {
    if (addRefs) {
      addRefs(sectionRefs);
      return () => addRefs([]);
    }
  }, [addRefs, sectionRefs]);

  return (
    <Container className="py-4">
      <div className="flex flex-col justify-center gap-y-8 sm:gap-y-16 md:gap-y-0 xl:gap-y-12 2xl:gap-y-0 p-6 sm:p-12 md:p-20 md:pb-36 bg-brown-200 rounded-2xl">
        <MainTitle />
        {STEPS_DATA.map((step, index) => (
          <StepContent key={step.id} data={step} stepRef={sectionRefs[index]} />
        ))}
      </div>
    </Container>
  );
};

export default CircularFramework;
