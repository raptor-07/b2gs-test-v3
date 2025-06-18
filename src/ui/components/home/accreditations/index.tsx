"use client";

import Container from "../../../../ui/components/container";
import Image from "next/image";

const ACCREDITATIONS = [
  { src: "/assets/accreditations/cpcb.svg", alt: "CPCB" },
  { src: "/assets/accreditations/iso.svg", alt: "ISO" },
  { src: "/assets/accreditations/qro.svg", alt: "QRO" },
  { src: "/assets/accreditations/gcp.svg", alt: "GCP" },
  { src: "/assets/accreditations/startup-india.svg", alt: "Startup India" },
  {
    src: "/assets/accreditations/startup-karnataka.svg",
    alt: "Startup Karnataka",
  },
];

const Accreditations = () => {
  return (
    <Container className="py-12 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center gap-y-8 sm:gap-y-24 p-6 sm:p-12 md:p-20 rounded-2xl">
        <h2 className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-brown-700 font-semibold">
          Accreditations and Recognitions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 md:gap-24 lg:gap-12 w-full">
          {ACCREDITATIONS.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={1050}
                height={1050}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Accreditations;
