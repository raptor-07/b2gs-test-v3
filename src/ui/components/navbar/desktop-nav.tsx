"use client";

import React from "react";
import { NAV_ITEMS } from "./types";
import { NavLink } from "./nav-link";
import { DesktopNavProps } from "./types";
import { Z_INDEX } from "@/utils/z-index";

export const DesktopNav: React.FC<DesktopNavProps> = ({ colorScheme }) => {
  return (
    <nav
      className="hidden md:block px-8 md:px-4 lg:px-8 py-4 bg-gradient-to-r from-brown-100/10 to-gray-50/0 backdrop-filter backdrop-blur-sm shadow-md shadow-gray-100/80 rounded-2xl border border-brown-300/20"
      style={{ zIndex: Z_INDEX.NAVBAR_DESKTOP }}
    >
      <ul className="flex items-center space-x-16 md:space-x-6 lg:space-x-12">
        {NAV_ITEMS.map((item) => (
          <li key={item.name} className="relative">
            <NavLink item={item} colorScheme={colorScheme} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
