"use client";

// import { Container } from "@/components/layout/Container";
import { ContentSection } from "./components/ContentSection";
import { InterconnectedAnimation } from "./components/InterconnectedAnimation";
import Image from "next/image";

export function InterconnectedSection() {
  return (
    <section className="w-full bg-paper-200 pb-8">
      {/* <Container> */}
      <div className="m-1 rounded-xl bg-green-800 relative">
        {/* Grainy texture overlay - mobile version */}
        <Image
          src="/assets/textures/grainy-green-mobile.svg"
          alt="Grainy background texture"
          fill
          className="absolute inset-0 object-cover opacity-30 pointer-events-none block md:hidden"
          priority
        />

        {/* Grainy texture overlay - desktop version */}
        <Image
          src="/assets/textures/grainy-green.svg"
          alt="Grainy background texture"
          fill
          className="absolute inset-0 object-cover opacity-30 pointer-events-none hidden md:block"
          priority
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="flex flex-col md:flex-row md:justify-center items-center">
            <div className="w-full md:w-3/4">
              <ContentSection />
            </div>
            <div className="w-full sm:w-[70%] md:w-1/4 lg:w-[20%]">
              <InterconnectedAnimation />
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
}
