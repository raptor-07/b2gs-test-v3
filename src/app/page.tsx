"use client";

import React, { useRef } from "react";
import Header from "@/ui/header";
import Navbar from "@/ui/components/navbar";
import HeroSection from "@/ui/components/home/hero-section";
import ProblemStatement from "@/ui/components/home/problem-statement";
import EPRSection from "@/ui/components/home/epr-section";
import IdeasSection from "@/ui/components/home/ideas-section";
//import PartnersSection from "@/ui/components/home/partners-section";
import FindUsSection from "@/ui/components/home/find-us-section";

export default function Home() {
  const sectorsRef = useRef<HTMLDivElement>(null);
  return (
    <main className="relative">
      <Navbar colorChangeRefs={[sectorsRef]} />
      <div className="bg-brown-100">
        <Header />
        <HeroSection />
        <ProblemStatement />
        <div ref={sectorsRef}>
          <EPRSection />
        </div>
        <IdeasSection />
        {/* <PartnersSection /> */}
        <FindUsSection />
      </div>
    </main>
  );
}
