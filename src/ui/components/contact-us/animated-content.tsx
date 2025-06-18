import React from "react";
import * as motion from "motion/react-client";
import { ContactForm } from "@/ui/components/form/contact-form";

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

export function ContactUsContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Content Section */}
      <motion.div
        variants={contentAnimation}
        initial="hidden"
        animate="visible"
        className="space-y-6 lg:self-start"
      >
        <article className="max-w-xl space-y-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-100">
            Get in Touch
          </h1>
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-green-100">
              Brown2Green Pvt. Ltd. is a waste management company providing
              sustainable recycling.
            </p>
            <p className="text-lg lg:text-xl text-green-100">
              It enables businesses integrate circularity into their operations,
              ensuring they are compliance ready.
            </p>
            <p className="text-lg lg:text-xl text-green-100">
              Have questions or want to learn more about our services?
              We&apos;re here to help.
            </p>
          </div>
          <address className="space-y-4 not-italic">
            <div className="flex text-md items-center space-x-4 text-green-100">
              <span>Bengaluru, India</span>
            </div>
            <div className="flex text-md items-center space-x-4 text-green-100">
              <span>info@brown2green.earth</span>
            </div>
          </address>
        </article>
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
  );
}
