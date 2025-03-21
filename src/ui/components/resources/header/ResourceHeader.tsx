"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import RequestProcurementButton from "../../request-procurement-button";
import { Z_INDEX } from "@/utils/z-index";

export function ResourceHeader() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="">
      <div className="flex h-28 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={handleLogoClick}
          style={{ zIndex: Z_INDEX.LOGO }}
        >
          {/* Mobile Logo */}
          <div className="block md:hidden">
            <Image
              src="/assets/logo-mobile.png"
              alt="B2G Solutions"
              width={50}
              height={50}
              style={{
                width: "50px",
                height: "auto",
              }}
            />
          </div>
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Image
              src="/assets/lockup.png"
              alt="B2G Solutions"
              width={150}
              height={150}
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Request Procurement Button */}
        <div className="flex-shrink-0">
          <RequestProcurementButton />
        </div>
      </div>
    </header>
  );
}
