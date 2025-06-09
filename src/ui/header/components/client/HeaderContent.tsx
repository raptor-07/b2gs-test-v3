"use client";

import { useState } from "react";
import Link from "next/link";
import { useScreenSize } from "@/hooks/useScreenSize";
import { LogoImage } from "../server/LogoImage";
import { HeaderContentProps } from "../../types";
import { NavigationMenu } from "./NavigationMenu";
import { MenuToggle } from "./MenuToggle";
import { MobileOverlay } from "./MobileOverlay";

const NAV_ITEMS_COUNT = 5; // Match with actual nav items count
const NAV_ITEM_WIDTH = 80; // px - Approximate width of nav items

function HeaderSkeleton() {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      {/* Logo skeleton */}
      <div className="relative h-8 w-32">
        <div className="h-full w-full rounded bg-gray-100 animate-pulse" />
      </div>

      {/* Navigation skeleton - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8">
        {Array.from({ length: NAV_ITEMS_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-20 rounded bg-gray-100 animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              width: `${NAV_ITEM_WIDTH}px`,
            }}
          />
        ))}
        {/* Demo button skeleton */}
        <div className="h-9 w-28 rounded bg-gray-100 animate-pulse" />
      </div>

      {/* Mobile menu button skeleton */}
      <div className="block h-10 w-10 md:hidden rounded bg-gray-100 animate-pulse" />
    </div>
  );
}

export function HeaderContent({ items }: HeaderContentProps) {
  const { isMobile, isLoading } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <>
      <div className="flex h-16 w-full items-center justify-between px-2 py-4 border-b-2 border-gray-400/40">
        <Link href="/">
          <LogoImage variant={isMobile ? "mobile" : "desktop"} />
        </Link>

        {isMobile ? (
          <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <NavigationMenu items={items} />
        )}
      </div>

      <MobileOverlay
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
