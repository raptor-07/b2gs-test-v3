"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DemoButton from "@/components/buttons/demo-button";
import { NavbarProps } from "../../types";
import { underlineMotion } from "../../animations/variants";

export function NavigationMenu({ items }: NavbarProps) {
  return (
    <nav className="flex items-center space-x-8">
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
