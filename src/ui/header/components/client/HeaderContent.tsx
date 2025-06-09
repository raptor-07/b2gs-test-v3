"use client";

import { useState } from "react";
import Link from "next/link";
import { useScreenSize } from "@/hooks/useScreenSize";
import { LogoImage } from "../server/LogoImage";
import { HeaderContentProps } from "../../types";
import { NavigationMenu } from "./NavigationMenu";
import { MenuToggle } from "./MenuToggle";
import { MobileOverlay } from "./MobileOverlay";

function HeaderSkeleton({ items }: HeaderContentProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="h-8 w-32 min-w-[128px] bg-gray-100 animate-pulse rounded" />
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

  if (isLoading) {
    return <HeaderSkeleton items={items} />;
  }

  return (
    <>
      <div className="flex w-full items-center justify-between">
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
