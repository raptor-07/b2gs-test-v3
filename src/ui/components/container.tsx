import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <section className={cn("mx-4 sm:mx-6 lg:mx-8", className)}>
      {children}
    </section>
  );
};

export default Container;
