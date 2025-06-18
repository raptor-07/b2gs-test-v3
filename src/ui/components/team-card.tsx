"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  edu_backgrnd: string;
  index: number;
  linkedIn?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  edu_backgrnd,
  index,
  linkedIn,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.1}s`,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col items-center p-6 md:p-8 lg:p-10"
    >
      <div className="mb-3 md:mb-4 lg:mb-5">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          style={{
            width: "200px",
            height: "auto",
          }}
          className="rounded-lg transition-transform duration-300 hover:scale-105 object-cover"
          priority={index < 3}
        />
      </div>
      <div className="flex justify-center items-center space-x-1 md:space-x-2">
        <h3 className="text-md md:text-xl font-semibold text-brown-700 text-nowrap">
          {name}
        </h3>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
            </svg>
          </a>
        )}
      </div>
      <p className="text-sm md:text-lg text-brown-600 text-nowrap">{role}</p>
      <p className="text-[10px] md:text-[16px] text-brown-600 text-nowrap">{edu_backgrnd}</p>

    </motion.div>
  );
};

export default TeamCard;
