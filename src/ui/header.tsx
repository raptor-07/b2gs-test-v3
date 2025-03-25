"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RequestProcurementButton from "./components/request-procurement-button";
import { Z_INDEX } from "@/utils/z-index";

const Lockup: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer relative"
      onClick={handleClick}
      style={{
        zIndex: Z_INDEX.LOGO,
      }}
    >
      <div className="block md:hidden">
        <Image
          src="/assets/logo-mobile.png"
          alt="Lockup"
          width={40}
          height={40}
          style={{
            width: "40px",
            height: "auto",
          }}
        />
      </div>
      <div className="hidden md:block">
        <Image
          src="/assets/lockup.png"
          alt="Lockup"
          width={450}
          height={450}
          style={{
            width: "450px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-brown-100 ">
        {/* Desktop Layout */}
        <div className="hidden md:flex h-28 items-center justify-between w-full">
          <div className="flex-shrink-0 mx-8">
            <Lockup />
          </div>
          <div className="flex-shrink-0 mx-8">
            <RequestProcurementButton />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden h-28 items-center justify-between w-[85%] sm:w-[90%] px-4">
          <div className="flex-shrink-0">
            <Lockup />
          </div>
          <div className="flex items-center justify-between w-full/2">
            <div className="flex items-center space-x-4">
              <RequestProcurementButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
