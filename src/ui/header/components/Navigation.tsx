"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { NavbarProps } from "../types";
import { underlineMotion } from "../animations/variants";
import DemoButton from "@/components/buttons/demo-button";

export function Navigation({ items }: NavbarProps) {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {items.map((item) => (
        <Link key={item.name} href={item.href} className="relative py-2">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative"
          >
            <span className="relative z-10">{item.name}</span>
            <motion.div
              variants={underlineMotion}
              className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
            />
          </motion.div>
        </Link>
      ))}
      <DemoButton />
    </nav>
  );
}
