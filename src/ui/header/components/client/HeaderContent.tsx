"use client";

import { useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useScreenSize } from "@/hooks/useScreenSize";
import { LogoImage } from "../server/LogoImage";
import { NavItem } from "../../types";
import { NavigationMenu } from "./NavigationMenu";
import { MenuToggle } from "./MenuToggle";
import { MobileDrawer } from "./MobileDrawer";

interface HeaderContentProps {
  items: NavItem[];
}

export function HeaderContent({ items }: HeaderContentProps) {
  const { isMobile } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const preferReducedMotion = useReducedMotion();
  const shouldReduceMotion = preferReducedMotion === null ? false : preferReducedMotion;
  
  return (
    <div className="flex h-16 items-center justify-between">
      <Link href="/" className="relative block h-8 w-32">
        <LogoImage variant={isMobile ? "mobile" : "desktop"} />
      </Link>
      
      {isMobile ? (
        <>
          <MenuToggle 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)}
            shouldReduceMotion={shouldReduceMotion}
          />
          <MobileDrawer 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            items={items}
            shouldReduceMotion={shouldReduceMotion}
          />
        </>
      ) : (
        <NavigationMenu items={items} />
      )}
    </div>
  );
}
