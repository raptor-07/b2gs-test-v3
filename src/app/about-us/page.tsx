"use client";

import React from "react";
import Header from "@/ui/header";
import Navbar from "@/ui/components/navbar";
import TeamCard from "@/ui/components/team-card";
import { motion } from "motion/react";
import Image from "next/image";
import FindUsSection from "@/ui/components/home/find-us-section";

const teamMembers = [
  {
    name: "Sagir Khan",
    role: "Chief Executive Officer",
    image: "/assets/people/sagir.png",
    linkedIn: "https://in.linkedin.com/in/sagir-khan",
  },
  // {
  //   name: "Abhisek Kumar",
  //   role: "CTO",
  //   image: "/assets/people/abhishek.png",
  //   linkedIn: "https://www.linkedin.com/in/dummy-abhisek",
  // },
  {
    name: "Deekshith Poola",
    role: "Chief Operations Officer",
    image: "/assets/people/deekshith.png",
    linkedIn: "https://uk.linkedin.com/in/contactpooladeekshith",
  },
  {
    name: "Shreya Naik",
    role: "Chief Strategy Officer",
    image: "/assets/people/shreya.png",
    linkedIn:
      "https://in.linkedin.com/in/shreya-a-naik",
  },
  {
    name: "Kashis Agarwal",
    role: "Chief of Supply Chain",
    image: "/assets/people/kashis.png",
    // linkedIn: "https://www.linkedin.com/in/dummy-kashis",
  },
  {
    name: "Hurmaan Ahmed",
    role: "Associate Product Owner",
    image: "/assets/people/hurmaan.png",
    // linkedIn: "https://www.linkedin.com/in/dummy-hurmaan",
  },
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
            className="w-full max-w-6xl mx-auto text-center mb-16 md:mb-20 lg:mb-24 px-4 md:px-6 lg:px-8 relative"
          >
            <div className="absolute -translate-y-8 md:translate-x-4 lg:translate-x-4">
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
              Producer Responsibility for PIBOs. With seamless tracking and
              traceability assurance, we make compliance effortless.
            </p>
          </motion.div>

          {/* Team Section */}
          <div className="my-20 md:my-24 lg:my-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-green-100 text-center mb-12"
            >
              People at Brown2Green Solutions
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  role={member.role}
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
