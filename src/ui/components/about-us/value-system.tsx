"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  paragraphs: [string, string];
  image: string;
  bgColor: string;
}

const cards: CardData[] = [
  {
    title: "Aligning Circularity",
    paragraphs: [
      "Aligning circularity with businesses drives progress while proofing it's path into a zero emission society.",
      "We prove that growth and sustainability can coexist by designing circular systems that seamlessly transition into operations while ensuring complete regulatory compliance",
    ],
    image: "/assets/value-system/aligning-circularity.png",
    bgColor: "bg-brown-200",
  },
  {
    title: "Visible Sustainability",
    paragraphs: [
      "Stories inspire change. We believe sustainability stories deserve to be showcased.",
      "We help craft narratives that establish a sustainable identity for businesses, delivering them to stakeholders who care.",
    ],
    image: "/assets/value-system/visible-sustainability.png",
    bgColor: "bg-brown-300",
  },
  {
    title: "Traceable Waste Management",
    paragraphs: [
      "Traceability in the wake of regulations is the first step toward a sustainable future and embracing it means knowing every detail.",
      "Establishing robust tracking along operational chains is key, and we carry out this mission by providing end-to-end insights into waste lifecycle.",
    ],
    image: "/assets/value-system/traceability.png",
    bgColor: "bg-brown-400",
  },
];

const ValueCard: React.FC<CardData> = ({
  title,
  paragraphs,
  image,
  bgColor,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${bgColor} rounded-xl p-6 md:p-8 lg:p-10`}
    >
      <div className="md:grid md:grid-cols-3 4xl:grid-cols-5 gap-8 items-center">
        <div className="space-y-6 md:space-y-8 md:col-span-2 4xl:col-span-3">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brown-700">
            {title}
          </h3>

          <div className="space-y-6">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg text-brown-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-6 md:mb-0 flex items-center justify-center md:col-span-1 4xl:col-span-2">
          <Image
            src={image}
            alt={title}
            width={1050}
            height={1050}
            className="w-[80%] 4xl:w-[60%] h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ValueSystem() {
  return (
    <section className="w-full max-w-[90vw] 4xl:max-w-[80vw] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-12 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-brown-700 font-semibold mb-24 md:mb-8 lg:mb-28"
      >
        Core Business Principles
      </motion.h2>

      <div className="space-y-8 md:space-y-12">
        {cards.map((card) => (
          <ValueCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
