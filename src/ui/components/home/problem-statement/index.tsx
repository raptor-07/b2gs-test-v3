"use client";

import { cn } from "@/utils/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../../../../ui/components/container";

interface ProblemStatementProps {
  className?: string;
}

const problemText = `In an era of rapid environmental degradation, the management of waste poses a significant challenge. Traditional disposal methods are no longer sustainable, and the need for innovative circular economy solutions has never been more pressing.`;

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      className={cn("min-h-[80vh] flex items-center justify-center", className)}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-[90%] sm:w-[80%] md:max-w-4xl lg:max-w-6xl px-4 sm:px-6 lg:px-4"
      >
        <p className="text-lg sm:text-3xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-aleo text-center">
          {problemText}
        </p>
      </motion.div>
    </Container>
  );
};

export default ProblemStatement;
