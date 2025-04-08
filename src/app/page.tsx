"use client";

import React, { useCallback, useState } from "react";
import Header from "../ui/header";
import Navbar from "../ui/components/navbar";
import HeroSection from "../ui/components/home/hero-section";
import ProblemStatement from "../ui/components/home/problem-statement";
import CircularFramework from "../ui/components/home/circular-framework";
import Accreditations from "../ui/components/home/accreditations";
import FindUsSection from "../ui/components/home/find-us-section";

export default function Home() {
  const [colorChangeRefs, setColorChangeRefs] = useState<
    React.RefObject<HTMLDivElement>[]
  >([]);

  const updateFrameworkRefs = useCallback(
    (refs: React.RefObject<HTMLDivElement>[]) => {
      setColorChangeRefs(refs);
    },
    [] // No dependencies needed since setColorChangeRefs is stable
  );

  return (
    <main className="relative">
      <Navbar colorChangeRefs={colorChangeRefs} />
      <div className="bg-brown-100">
        <Header />
        <HeroSection />
        <ProblemStatement />
        <CircularFramework addRefs={updateFrameworkRefs} />
        <Accreditations />
        <FindUsSection />
      </div>
    </main>
  );
}
