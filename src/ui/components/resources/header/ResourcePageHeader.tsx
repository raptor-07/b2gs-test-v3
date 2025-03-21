"use client";

import React from "react";
import Navbar from "../../navbar";
import Header from "@/ui/header";

export function ResourcePageHeader() {
  return (
    <header className="bg-brown-100">
      <Navbar colorChangeRefs={[]} />
      <Header />
    </header>
  );
}
