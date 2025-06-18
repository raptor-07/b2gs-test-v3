"use client";

import React from "react";
import ValueSystem from "../../ui/components/about-us/value-system";
import Header from "../../ui/header";
import Navbar from "../../ui/components/navbar";
import TeamCard from "../../ui/components/team-card";
import { motion } from "motion/react";
import Image from "next/image";
import FindUsSection from "../../ui/components/home/find-us-section";

const teamMembers = [
  {
    name: "Sagir Khan",
    role: "Chief Executive Officer",
    edu_backgrnd: "Chemical Engineer",
    image: "/assets/people/sagir.png",
    linkedIn: "https://in.linkedin.com/in/sagir-khan",
  },
  // {
  //   name: "Abhisek Kumar",
  //   role: "CTO",
  //   edu_backgrnd: "Law Practitioner",
  //   image: "/assets/people/abhishek.png",
  //   linkedIn: "https://www.linkedin.com/in/dummy-abhisek",
  // },
  {
    name: "Deekshith Poola",
    role: "Chief Operations Officer",
    edu_backgrnd: "Corporate Lawyer",
    image: "/assets/people/deekshith.png",
    linkedIn: "https://uk.linkedin.com/in/contactpooladeekshith",
  },
  {
    name: "Shreya Naik",
    role: "Chief Strategy Officer",
    edu_backgrnd: "Chemical Engineer",
    image: "/assets/people/shreya.png",
    linkedIn: "https://in.linkedin.com/in/shreya-a-naik",
  },
  {
    name: "Kashis Agarwal",
    role: "Chief Supply Chain Officer",
    edu_backgrnd: "Computer Science Engineer",
    image: "/assets/people/kashis.png",
    // linkedIn: "https://www.linkedin.com/in/dummy-kashis",
  },
  // {
  //   name: "Hurmaan Ahmed",
  //   role: "Associate Product Owner",
  //   edu_backgrnd: "Computer Science Engineer",
  //   image: "/assets/people/hurmaan.png",
  //   // linkedIn: "https://www.linkedin.com/in/dummy-hurmaan",
  // },
];

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <div className="bg-brown-100">
        <Header />

        <div className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          {/* Quote/Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl mx-auto text-center mb-16 md:mb-20 lg:mb-4 px-4 md:px-6 lg:px-8 relative"
          >
            <div className="absolute -translate-y-8 md:translate-x-4 lg:translate-x-1">
              <Image
                src="/assets/idea-illustrations/quotes.png"
                alt="Quotes"
                width={1200}
                height={600}
                className="w-[50px] lg:w-[100px] h-auto opacity-90"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold font-aleo text-green-100 mb-8 leading-[1.2]">
              Compliance Without Compromise, Circularity Beyond Borders
            </h1>
            <p className="text-lg md:text-xl italic text-green-100">
              We take the lead in navigating Waste Management and Extended
              Producer Responsibility for Producers, Importers, and Brand Owners
              (PIBOs). With seamless tracking and traceability assurance, we
              make compliance effortless.
            </p>
          </motion.div>

          {/* Value System Section */}
          <ValueSystem />

          {/* Team Section */}
          <div className="my-20 md:my-24 lg:my-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-brown-700 font-semibold mb-24 md:mb-8 lg:mb-20"
            >
              People at Brown2Green Solutions
            </motion.h2>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8"> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  edu_backgrnd={member.edu_backgrnd}
                  linkedIn={member.linkedIn}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brown-100">
        <FindUsSection />
      </div>
    </main>
  );
}
