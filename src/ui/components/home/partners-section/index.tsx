"use client";

import { cn } from "../../utils/cn";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PartnersSectionProps {
  className?: string;
}

const logos = [
  "/assets/partners/sdm-cet.png",
  "/assets/partners/sdm-med.png",
  "/assets/partners/e.png",
  "/assets/partners/f.png",
];

const PartnersSection: React.FC<PartnersSectionProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={cn(
        "bg-brown-100 w-full py-12 sm:py-16 lg:py-20 transform -mt-1",
        "overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
          <div className="flex flex-col w-full">
            {/* 1. Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-200 mb-6">
              Our Partners
            </h2>

            {/* 2. Illustration - Mobile Only */}
            <div className="md:hidden w-full flex justify-center mb-8">
              <div className="w-[70%]">
                <Image
                  src="/assets/partners/partners.png"
                  alt="Partners Illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* 3. Description */}
            <p className="text-xl md:text-2xl text-green-200 mb-8">
              Discover Our Partners & Customers.
            </p>

            {/* 4. Partner Logos - Grid layout */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 lg:gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-brown-100/5 rounded-lg p-4 h-[80px] md:h-auto"
                >
                  <div className="w-full flex justify-center">
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      width={160}
                      height={80}
                      className="max-w-[80px] sm:max-w-[70px] md:max-w-[50px] lg:max-w-[100px] h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Illustration */}
          <div className="hidden md:flex flex-none md:w-[40%] lg:w-[35%] xl:w-[30%] items-center justify-end">
            <div className="relative w-[80%] sm:w-[70%] md:w-[85%] lg:w-[80%]">
              <Image
                src="/assets/partners/partners.png"
                alt="Partners Illustration"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;
