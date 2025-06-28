"use client";

import { Container } from "@/components/layout/Container";
import SecondaryButton from "@/components/buttons/secondary-button";
import { ProcessCard } from "@/ui/sections/circular-framework/ProcessCard";
import InViewPopIn from "@/components/animations/InViewPopIn";

const processCards = [
  {
    title: "Collection",
    bullets: [
      "Cloud-driven scheduling for waste pickups.",
      "Diverse fleet of electric vehicles.",
      "Real-time monitoring of collection vehicles.",
    ],
    lottieUrl: "assets/lottie/circular-framework/collection.json",
    placeholderImage: "/assets/circular-framework/collection.svg",
    number: 1,
  },
  {
    title: "Processing",
    bullets: [
      "Eco-friendly recycling methods.",
      "Third-party vendor profiling.",
      "Carbon emission accounting and analytics.",
    ],
    lottieUrl: "assets/lottie/circular-framework/processing.json",
    placeholderImage: "/assets/circular-framework/processing.svg",
    number: 2,
  },
  {
    title: "Distribution",
    bullets: [
      "Distribution network of recyclers and manufacturers.",
      "Recycled raw material for reuse or sale.",
      "Classified marketplace for Green commodities.",
    ],
    lottieUrl: "assets/lottie/circular-framework/distribution.json",
    placeholderImage: "/assets/circular-framework/distribution.svg",
    number: 3,
  },
  {
    title: "Compliance",
    bullets: [
      "Plug and play compliance management.",
      "EPR solutions for all materials with support for EPR Credits.",
      "Implementation of carbon reduction projects supporting credit issuance.",
    ],
    lottieUrl: "assets/lottie/circular-framework/compliance.json",
    placeholderImage: "/assets/circular-framework/compliance.svg",
    number: 4,
  },
];

export default function CircularFrameworkSection() {
  return (
    <section className="py-12 bg-paper-300">
      <Container>
        <InViewPopIn
          duration={1.5}
          delay={0.01}
          className=""
          once={false}
          margin="0%"
          amount="some"
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2 md:gap-6 lg:gap-1 xl:gap-2">
              {/* Titles */}
              <span className="text-mint-500 text-md md:text-lg uppercase">
                Our Solution
              </span>
              <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
                The Circular Framework
              </h2>
              <p className="text-base md:text-md lg:text-md xl:text-lg text-mint-950 max-w-3xl lg:max-w-none">
                Our ecosystem integrates sustainability across various stages of
                recycling to provide a comprehensive view.
              </p>
            </div>

            {/* Cards Grid */}
            <div
              className="
              grid grid-cols-1 gap-6 mt-6
              md:grid-cols-2 lg:grid-cols-2
              w-full
            "
            >
              {processCards.map((card, idx) => (
                <ProcessCard
                  key={idx}
                  title={card.title}
                  bullets={card.bullets}
                  lottieUrl={card.lottieUrl}
                  placeholderImage={card.placeholderImage}
                  number={card.number}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex w-full justify-end mt-8">
              <SecondaryButton className="h-10 w-auto bg-gray-50 text-gray-700 transition-colors duration-300 hover:shadow-md hover:gray-800 border border-gray-500 hover:border-gray-600">
                <p className=" text-sm text-nowrap">Discover Our Services</p>
              </SecondaryButton>
            </div>
          </div>
        </InViewPopIn>
      </Container>
    </section>
  );
}
