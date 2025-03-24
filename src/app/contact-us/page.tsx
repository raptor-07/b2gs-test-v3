"use client";

import React from "react";
import Header from "@/ui/header";
import Navbar from "@/ui/components/navbar";
import { ContactForm } from "@/ui/components/form/contact-form";
import { motion } from "motion/react";
import FindUsSection from "@/ui/components/home/find-us-section";

const contentAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <div className="bg-brown-100">
        <Header />
        <div className="flex-1 flex flex-col justify-center min-h-screen">
          <div className="container mx-auto h-full flex items-center mt-4 my-20 md:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Content Section */}
              <motion.div
                variants={contentAnimation}
                initial="hidden"
                animate="visible"
                className="space-y-6 lg:self-start"
              >
                <div className="max-w-xl space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-green-100">Get in Touch</h1>
                  <p className="text-lg lg:text-xl text-green-100">
                    Have questions or want to learn more about our services? We&apos;re here to help.
                  </p>
                  <div className="flex items-center space-x-4 text-green-100">
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center space-x-4 text-green-100">
                    <span>info@brown2green.earth</span>
                  </div>
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                variants={contentAnimation}
                initial="hidden"
                animate="visible"
                className="bg-brown-200 rounded-2xl p-8"
              >
                <div className="max-w-xl mx-auto">
                  <ContactForm />
                </div>
              </motion.div>
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
