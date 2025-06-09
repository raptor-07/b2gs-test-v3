"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DemoButton from "@/components/buttons/demo-button";
import { underlineMotion } from "../../animations/variants";
import { NavbarProps } from "../../types";

export function NavigationMenu({ items }: NavbarProps) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <div key={item.name} className="relative w-20">
          <Link
            href={item.href}
            className="relative text-sm font-medium text-gray-800 hover:text-primary-500"
          >
            {item.name}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-500"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={underlineMotion}
            />
          </Link>
        </div>
      ))}
      <DemoButton className="h-9 w-28" />
    </nav>
  );
}
