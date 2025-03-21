"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    src: "/assets/partners/sdm-cet.png",
    alt: "SDM CET",
  },
  {
    src: "/assets/partners/sdm-med.png",
    alt: "SDM Medical",
  },
  {
    src: "/assets/partners/e.png",
    alt: "Partner E",
  },
  {
    src: "/assets/partners/f.png",
    alt: "Partner F",
  },
];

const InfiniteBanner: React.FC = () => {
  const logoRefs = React.useRef<(HTMLImageElement | null)[]>([]);
  const [totalWidth, setTotalWidth] = React.useState(0);

  React.useEffect(() => {
    const calculateWidth = () => {
      const width = logoRefs.current.reduce((acc, img) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          return acc + rect.width + 64; // 64px is the gap between logos
        }
        return acc;
      }, 0);
      setTotalWidth(width);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <div className="flex relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-brown-100 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-brown-100 after:to-transparent after:content-['']">
      <motion.div
        animate={{
          x: totalWidth > 0 ? [-totalWidth / 2, 0] : 0,
        }}
        transition={{
          duration: totalWidth > 0 ? 20 * (totalWidth / 1000) : 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-16 pr-16"
      >
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {logos.map((logo, index) => (
              <Image
                ref={(el) => {
                  if (i === 0) logoRefs.current[index] = el;
                }}
                key={`${i}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-16 lg:h-20 w-auto object-contain"
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
