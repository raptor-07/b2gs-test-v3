// Alternative approach using crossfade instead of slide
// This can be used if the slide animation continues to cause issues

"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import InViewPopIn from "@/components/animations/InViewPopIn";
import { GradientText } from "../hero/components/GradientText";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ProductsNavbar from "./components/ProductsNavbar";
import ProductMain from "./components/ProductMain";
import { PRODUCTS } from "./components/ProductMain";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function ProductsSectionAlternative() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track direction for animation
  function handleSelect(idx: number) {
    if (isTransitioning) return; // Prevent rapid clicking
    setIsTransitioning(true);
    setActiveIdx(idx);

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 600);
  }

  // Crossfade animation variants
  const crossfadeVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative w-full py-12 bg-paper-300 overflow-hidden">
      <Container>
        <InViewPopIn>
          <div className="grid grid-rows-[auto] grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            {/* Titles */}
            <div className="flex flex-col gap-2 md:gap-2 lg:gap-1 xl:gap-2 row-start-1 col-start-1 col-end-3">
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
              <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 gap-y-8">
                {/* Navbar */}
                <div className="row-start-1 col-start-1 col-end-3 mb-2">
                  <ProductsNavbar
                    products={PRODUCTS}
                    activeIdx={activeIdx}
                    onSelect={handleSelect}
                  />
                </div>

                {/* Product Main Container - Fixed responsive heights */}
                <div className="row-start-2 col-start-1 col-end-3 min-h-[500px] sm:min-h-[450px] md:min-h-[380px] lg:min-h-[420px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`product-${activeIdx}`}
                      variants={crossfadeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute inset-0 w-full h-full"
                    >
                      <ProductMain product={PRODUCTS[activeIdx]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* CTA Section - Same as before */}
            <div className="row-start-3 col-start-1 col-end-3">
              <div
                className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-6 md:gap-4 items-center rounded-xl p-6 md:p-6 md:px-10 md:py-6 relative"
                style={{
                  background:
                    "linear-gradient(89.448deg, #C9DDB3 0%, #C9DDB3 71%, #9CC79C 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-10 rounded-xl"
                  style={{
                    backgroundImage: "url('/assets/textures/grainy-green.svg')",
                    zIndex: 0,
                  }}
                />

                <div className="flex flex-col gap-4 md:gap-2 lg:gap-4 relative z-10">
                  <h3 className="text-green-800 text-xl md:text-md lg:text-2xl font-medium">
                    Ready to rethink your{" "}
                    <GradientText className="font-ibm italic tracking-[-0.04em]">
                      sustainability strategy
                    </GradientText>
                    ?
                  </h3>
                  <p className="text-green-800 text-base md:text-sm lg:text-lg">
                    Want to know more? Connect with us to discover how our
                    products and features can be tailored to your business.
                  </p>
                  <div className="flex flex-start">
                    <SecondaryButton className="h-10 w-auto bg-green-400 text-gray-100 transition-colors duration-300 hover:shadow-md hover:green-800 border border-green-200 hover:border-green-600">
                      <p className="text-sm text-nowrap">Contact Sales</p>
                    </SecondaryButton>
                  </div>
                </div>

                <motion.div
                  className="flex items-center justify-center w-full relative z-10"
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
                    className="object-contain h-full max-w-[250px] md:max-w-[200px] lg:max-w-[330px]"
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
