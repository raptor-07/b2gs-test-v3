"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion } from "framer-motion";

interface EPRRowProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const EPRRow: React.FC<EPRRowProps> = ({
  title,
  description,
  images,
  className,
}) => {
  return (
    <div className={cn("md:grid md:grid-cols-2 items-center", className)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-lime-100 font-light">
          {title}
        </h3>
        <p className="text-lg sm:text-md lg:text-lg xl:text-xl text-lime-100">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {images.map((image) => (
          <div
            key={image.alt}
            className="relative aspect-square w-full overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-contain p-2"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default EPRRow;
