"use client";

import { Container } from "@/components/layout";
import InViewPopIn from "@/components/animations/InViewPopIn";
import { InfoCard } from "./InfoCard";
import { TransitionLottie } from "./LottieStack";

const infocardData = [
  {
    title: "Global Recycling Rate",
    number: "32%",
    description:
      "of all waste generated globally is recycled with regional variations.",
    particleConfigs: [{}, {}],
  },
  {
    title: "Global Recycling Rate",
    number: "32%",
    description:
      "of all waste generated globally is recycled with regional variations.",
    particleConfigs: [{}, {}],
  },
  {
    title: "Global Recycling Rate",
    number: "32%",
    description:
      "of all waste generated globally is recycled with regional variations.",
    particleConfigs: [{}, {}],
  },
  {
    title: "Global Recycling Rate",
    number: "32%",
    description:
      "of all waste generated globally is recycled with regional variations.",
    particleConfigs: [{}, {}],
  },
];

export default function CircularTransitionSection() {
  return (
    <section className="py-8 bg-paper-300">
      <Container>
        <InViewPopIn
          duration={2}
          delay={0.01}
          className=""
          once={false}
          margin="0%"
          amount="some"
        >
          <div className="grid grid-rows-3 grid-cols-2 gap-y-8 gap-x-6">
            {/* Titles: 1r1c-1r2c */}
            <div className="row-start-1 row-end-2 col-start-1 col-end-3 flex flex-col items-start gap-2">
              <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
                The Circular Economy Transition
              </h2>
              <p className="text-base md:text-lg text-mint-950 max-w-2xl">
                We integrate circularity systems into modern businesses.
              </p>
            </div>
            {/* Lottie Section: Responsive flex container */}
            <div className="row-start-2 row-end-3 col-start-1 col-end-3 flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-y-0 lg:gap-x-12 w-full">
              <div className="w-full lg:w-1/2 flex justify-center">
                <TransitionLottie
                  title="From Linear Economy"
                  lottieSrc="/assets/lottie/circular-transition/linear.json"
                  description="Take • Make • Dump"
                  placeholderImage="/assets/circular-transition/linear.svg"
                />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <TransitionLottie
                  title="To Circular Economy"
                  lottieSrc="/assets/lottie/circular-transition/circular.json"
                  description="Reduce • Reuse • Recycle"
                  placeholderImage="/assets/circular-transition/circular.svg"
                />
              </div>
            </div>
            {/* InfoCard Grid: 3r1c-3r3c */}
            <div className="row-start-3 row-end-4 col-start-1 col-end-3 flex flex-col md:flex-row justify-start items-stretch gap-6 md:gap-6 w-full">
              {infocardData.map((card, idx) => (
                <InfoCard
                  key={card.title + idx}
                  title={card.title}
                  number={card.number}
                  description={card.description}
                  particleConfigs={card.particleConfigs}
                />
              ))}
            </div>
          </div>
        </InViewPopIn>
      </Container>
    </section>
  );
}
