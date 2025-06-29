"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/layout";
import InViewPopIn from "@/components/animations/InViewPopIn";
import { GradientText } from "../hero/components/GradientText";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ProductsNavbar from "./components/ProductsNavbar";
import ProductMain from "./components/ProductMain";
import { PRODUCTS } from "./components/ProductMain";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function ProductsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const prevIdx = useRef(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Auto-slide timer
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDirection("right");
  //     setActiveIdx((idx) => (idx + 1) % PRODUCTS.length);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, [activeIdx]);

  // Track direction for animation
  function handleSelect(idx: number) {
    setDirection(idx > activeIdx ? "right" : "left");
    setActiveIdx(idx);
    prevIdx.current = activeIdx;
  }

  return (
    <section className="relative w-full py-12 bg-paper-100 dark:bg-mint-900 overflow-hidden">
      <Container>
        <InViewPopIn>
          <div className="grid grid-rows-[auto] grid-cols-2 gap-y-10 gap-x-8">
            {/* Titles */}
            <div className="flex flex-col gap-2 md:gap-6 lg:gap-1 xl:gap-2 row-start-1 col-start-1 col-end-3">
              <span className="text-mint-500 text-md md:text-lg uppercase">
                Our Products
              </span>
              <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
                The Circular Ecosystem
              </h2>
              <p className="text-base md:text-md lg:text-md xl:text-lg text-mint-950 max-w-3xl lg:max-w-none">
                Our ecosystem integrates sustainability across various stages of
                recycling to provide a comprehensive view.
              </p>
            </div>
            {/* Product Section */}
            <div className="row-start-2 col-start-1 col-end-3">
              <div className="grid grid-rows-[auto_auto] grid-cols-2 gap-6">
                {/* Navbar */}
                <div className="row-start-1 col-start-1 col-end-3 mb-2">
                  <ProductsNavbar
                    products={PRODUCTS}
                    activeIdx={activeIdx}
                    onSelect={handleSelect}
                  />
                </div>
                {/* Product Main (Card + Animation) */}
                <div className="row-start-2 col-start-1 col-end-3 min-h-[260px]">
                  <div className="relative w-full h-full">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={PRODUCTS[activeIdx].key}
                        custom={direction}
                        initial={{
                          x: direction === "right" ? 100 : -100,
                          opacity: 0,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{
                          x: direction === "right" ? -100 : 100,
                          opacity: 0,
                        }}
                        transition={{
                          type: "spring",
                          duration: 0.7,
                          delay: 0.08,
                          ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="w-full h-full"
                      >
                        <ProductMain product={PRODUCTS[activeIdx]} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="row-start-3 col-start-1 col-end-3">
              <div
                className="grid grid-cols-[1fr_auto] gap-4 items-center rounded-xl p-6 md:px-10 md:py-6"
                style={{
                  background:
                    "linear-gradient(89.448deg, #C9DDB3 0%, #C9DDB3 71%, #9CC79C 100%)",
                }}
              >
                {/* Background texture */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "url('/assets/textures/grainy-green.svg')",
                    zIndex: -1,
                  }}
                />
                {/* CTA Text */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-green-800 text-xl md:text-2xl font-medium">
                    Ready to rethink your{" "}
                    <GradientText className="font-ibm italic tracking-[-0.06em]">
                      sustainability strategy
                    </GradientText>
                    ?
                  </h3>
                  <p className="text-green-800 text-base md:text-lg">
                    Want to know more? Connect with us to discover how our
                    products and features can be tailored to your business.
                  </p>
                  <div className="flex flex-start">
                    <SecondaryButton className="h-10 w-auto bg-green-400 text-gray-100 transition-colors duration-300 hover:shadow-md hover:green-800 border border-green-200 hover:border-green-600">
                      <p className=" text-sm text-nowrap">Contact Sales</p>
                    </SecondaryButton>
                  </div>
                </div>
                {/* CTA Illustration */}
                <motion.div
                  className="flex items-center justify-center w-full max-w-[330px] aspect-[500/330]"
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Image
                    src="/assets/products/circularity-illustration.png"
                    alt="CTA Illustration"
                    width={500}
                    height={330}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </InViewPopIn>
      </Container>
    </section>
  );
}
