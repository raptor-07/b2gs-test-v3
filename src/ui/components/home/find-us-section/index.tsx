"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FindUsSectionProps {
  className?: string;
}

const FindUsSection: React.FC<FindUsSectionProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={cn(
        "bg-olive-400 w-full transform -mt-1",
        "overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-8 font-aleo text-lime-100 lg:max-w-xl">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                We&apos;re Here
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-2xl">
                Brown2Green Solutions Pvt. Ltd.
              </h3>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/util-icons/pin.png"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
                <p>Bengaluru, Karnataka, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/util-icons/mail.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
                <a href="mailto:info@brown2green.solutions">
                  info@brown2green.solutions
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/brown2green-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Image
                    src="/assets/util-icons/in.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@Brown2GreenSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Image
                    src="/assets/util-icons/yt.png"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                  <span>YouTube</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/util-icons/phone.png"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
                <a href="tel:+917619159929">+91-7619159929</a>
              </div>
            </div>
            <div className="w-full flex items-center justify-start gap-8 md:gap-12">
              <div className="w-[25%] md:w-[45%] lg:w-[40%]">
                <Image
                  src="/assets/idea-illustrations/QRO-badge.png"
                  alt="Location Illustration"
                  width={1080}
                  height={1080}
                  className="w-full"
                />
              </div>
              <div className="w-[25%] md:w-[45%] lg:w-[40%]">
                <Image
                  src="/assets/idea-illustrations/ISO-badge.png"
                  alt="Location Illustration"
                  width={1080}
                  height={1080}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex-none md:w-[40%] lg:w-[35%] xl:w-[30%] flex items-center justify-center md:justify-end">
            <div className="relative w-[70%] md:w-[85%] lg:w-[80%]">
              <Image
                src="/assets/idea-illustrations/blr-pin-india.png"
                alt="Location Illustration"
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

export default FindUsSection;
