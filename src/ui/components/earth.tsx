import Image from "next/image";
import React from "react";
import { cn } from "@/utils/cn";

interface EarthProps {
  className?: string;
}

const Earth: React.FC<EarthProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute top-[60vh] flex items-center justify-center w-full",
        className
      )}
      style={{ zIndex: 10 }}
    >
      <Image
        src="/assets/earth.png"
        alt="Earth"
        width={1024}
        height={1024}
        className="lg:w-[70vw] lg:h-[70vw]"
      />
    </div>
  );
};

export default Earth;
