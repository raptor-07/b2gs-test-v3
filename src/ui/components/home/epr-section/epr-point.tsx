"use client";

import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface EPRPointProps {
  title: string;
  description: string;
  className?: string;
}

const EPRPoint: React.FC<EPRPointProps> = ({ title, description, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col gap-2", className)}
    >
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
        {title}
      </h3>
      <p className="text-lg sm:text-xl lg:text-2xl opacity-90">
        {description}
      </p>
    </motion.div>
  );
};

export default EPRPoint;
