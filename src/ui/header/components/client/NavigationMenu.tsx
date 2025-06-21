"use client";

import Link from "next/link";
import DemoButton from "@/components/buttons/demo-button";
import { NavbarProps } from "../../types";
// import ThemeToggle from "@/components/client/ThemeToggle";

export function NavigationMenu({ items }: NavbarProps) {
  return (
    <div className="flex items-center space-x-8">
      <nav className="hidden md:flex items-center space-x-4">
        {items.map((item) => (
          <div key={item.name} className="relative group">
            <Link
              href={item.href}
              className="relative inline-block px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-primary-500 dark:hover:text-gray-50"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        {/* <ThemeToggle /> */}
        <DemoButton className="h-9" />
      </div>
    </div>
  );
}
