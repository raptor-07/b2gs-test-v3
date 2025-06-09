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

function HeaderSkeleton({ items }: HeaderContentProps) {
  return (
    <div className="flex h-16 items-center justify-between">
      <div className="h-8 w-32 bg-gray-100 animate-pulse rounded" />
      <div className="hidden md:flex space-x-8">
        {items.map((_, i) => (
          <div key={i} className="h-4 w-20 bg-gray-100 animate-pulse rounded" />
        ))}
        <div className="h-8 w-28 bg-gray-100 animate-pulse rounded" />
      </div>
      <div className="block md:hidden h-8 w-8 bg-gray-100 animate-pulse rounded" />
    </div>
  );
}

export function HeaderContent({ items }: HeaderContentProps) {
  const { isMobile, isLoading } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const preferReducedMotion = useReducedMotion();
  const shouldReduceMotion = preferReducedMotion === null ? false : preferReducedMotion;
  
  if (isLoading) {
    return <HeaderSkeleton items={items} />;
  }

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
