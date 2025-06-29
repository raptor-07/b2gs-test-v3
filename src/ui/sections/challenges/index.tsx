"use client";

import { Container } from "@/components/layout";
import { ChallengesGrid } from "./components/ChallengesGrid";
import { InterconnectedSection } from "../interconnected";
import InViewPopIn from "@/components/animations/InViewPopIn";

export default function ChallengesSection() {
  return (
    <section className="py-8 bg-paper-200">
      <Container>
        <InViewPopIn
          duration={2}
          delay={0.01}
          className=""
          once={false}
          margin="0%"
          amount="some"
        >
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 xl:gap-2">
            {/* Title and Subtitle */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
                Addressing Challenges in Waste Management
              </h2>
              <p className="text-base md:text-lg text-mint-950 max-w-2xl">
                Brown2Green is committed to solving critical challenges faced in
                waste management.
              </p>
            </div>

            {/* Challenges Grid */}
            <ChallengesGrid />

            {/* Additional Information */}
            <InterconnectedSection />
          </div>
        </InViewPopIn>
      </Container>
    </section>
  );
}
