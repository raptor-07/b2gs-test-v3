"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion } from "framer-motion";

interface MaterialsGridProps {
  className?: string;
}

const materials = [
  {
    src: "/assets/components-material/aluminium-cookware.png",
    alt: "Aluminium Cookware",
  },
  {
    src: "/assets/components-material/copper-wires.png",
    alt: "Copper Wires",
  },
  {
    src: "/assets/components-material/lithium-battery.png",
    alt: "Lithium Battery",
  },
  {
    src: "/assets/components-material/packaging.png",
    alt: "Packaging",
  },
];

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
        className
      )}
    >
      {materials.map((material, index) => (
        <motion.div
          key={material.alt}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-square w-full"
        >
          <Image
            src={material.src}
            alt={material.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MaterialsGrid;
