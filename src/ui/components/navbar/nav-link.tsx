"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { NavLinkProps } from "./types";

export const NavLink: React.FC<NavLinkProps> = ({ item, colorScheme }) => {
  return (
    <Link
      href={item.href}
      className="group flex flex-col items-center gap-1 transition-colors duration-200"
    >
      <div className="relative w-6 h-6">
        <Image
          src={colorScheme === "brand-brown" ? item.icon.dark : item.icon.light}
          alt={item.name}
          fill
          sizes="24px"
          className="object-contain transition-opacity duration-200"
        />
      </div>
      <motion.span
        className="text-sm font-medium block"
        initial={false}
        animate={{
          color:
            colorScheme === "brand-brown"
              ? "var(--s-brand-brown)"
              : "var(--s-brand-green)",
        }}
        transition={{ duration: 0.3 }}
      >
        {item.name}
      </motion.span>
    </Link>
  );
};
