"use client";

import React, { useRef } from "react";
import Header from "../../ui/header";
import Navbar from "../../ui/components/navbar";
import DashboardSection from "../../ui/components/services/dashboard/dashboard-section";
import SectorsSection from "../../ui/components/services/sectors/sectors-section";
import RecyclablesSection from "../../ui/components/services/recyclables/recyclables-section";
import FindUsSection from "../../ui/components/home/find-us-section";

export default function Services() {
  const sectorsRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      {/* Navbar should be outside the brown background div */}
      <Navbar colorChangeRefs={[sectorsRef]} />
      <div className="bg-brown-100">
        <Header />
        <div>
          <DashboardSection />
          <div ref={sectorsRef}>
            <SectorsSection />
          </div>
          <RecyclablesSection />
        </div>
      </div>
      <div className="bg-brown-100">
        <FindUsSection />
      </div>
    </main>
  );
}
