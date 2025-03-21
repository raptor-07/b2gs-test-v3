"use client";

import { cn } from "@/utils/cn";
import EPRRow from "./epr-row";
import { motion } from "framer-motion";

interface EPRSectionProps {
  className?: string;
}

const materialImages = [
  {
    src: "/assets/components-material/copper-wires.png",
    alt: "Copper Wires",
  },
  {
    src: "/assets/components-material/aluminium-cookware.png",
    alt: "Aluminium Cookware",
  },
  {
    src: "/assets/components-material/lithium-battery.png",
    alt: "Lithium Battery",
  },
];

const certificationImages = [
  {
    src: "/assets/components-material/epr-creds.png",
    alt: "EPR Credentials",
  },
  {
    src: "/assets/components-material/epr-certs.png",
    alt: "EPR Certifications",
  },
  {
    src: "/assets/components-material/cpcb.png",
    alt: "CPCB",
  },
];

const EPRSection: React.FC<EPRSectionProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "w-full bg-olive-300 py-12 sm:py-16 lg:py-20 min-h-[120vh] 3xl:min-h-[80vh] flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-lime-100">
            Extended Producers Responsibility
          </h2>
          {/* <h3 className="text-xl sm:text-2xl lg:text-3xl text-lime-100">
            for packaging and beyond
          </h3> */}
        </motion.div>

        {/* Content Rows */}
        <div className="space-y-24 sm:space-y-24 lg:space-y-8 xl:space-y-8 2xl:space-y-12 3xl:space-y-20">
          {/* Metal EPR Row */}
          <EPRRow
            title="EPR Solutions"
            description="Delivering comprehensive EPR services for both metal and plastic producers, going beyond the industry scope."
            images={materialImages}
          />

          {/* Certification Row */}
          <EPRRow
            title="Accreditations & Certifications"
            description="Compliance assistance to help your business meet upcoming regulations, ensuring EPR certifications and credits"
            images={certificationImages}
          />
        </div>
      </div>
    </section>
  );
};

export default EPRSection;
