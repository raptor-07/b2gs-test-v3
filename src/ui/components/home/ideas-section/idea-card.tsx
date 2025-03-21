"use client";

import React from "react";
import Image from "next/image";

interface IdeaCardProps {
  heading: string;
  description: string;
  image: string;
  backgroundColor: string;
  className?: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  heading,
  description,
  image,
  backgroundColor,
  className,
}) => {
  return (
    <div
      className={`${backgroundColor} h-[66.67vh] 2xl:h-[60vh] 3xl:h-[50vh] 4xl:h-[48vh] relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="max-w-[2000px] mx-auto h-full">
        <div className="h-full w-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
          {/* Content Column */}
          <div className="w-full h-full md:w-[60vw] lg:w-[60vw] 3xl:w-[50%] p-4 md:p-8 flex flex-col justify-evenly md:justify-center  max-w-3xl">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 text-brown-900">
              {heading}
            </h2>
            <div className="md:hidden lg:hidden w-full relative sm:flex sm:justify-center">
              <Image
                src={image}
                alt={heading}
                width={1024}
                height={1024}
                className="rounded-lg sm:w-[300px] sm:h-auto"
              />
            </div>
            <p className="text-md md:text-xl lg:text-xl text-brown-800">
              {description}
            </p>
          </div>

          {/* Illustration Column - Hidden on mobile */}
          <div className="hidden w-[40vw] 3xl:w-[40%] h-full relative md:flex lg:flex flex-col justify-center items-center">
            <div className="max-w-[800px] w-full">
              <Image
                src={image}
                alt={heading}
                width={1048}
                height={1048}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
