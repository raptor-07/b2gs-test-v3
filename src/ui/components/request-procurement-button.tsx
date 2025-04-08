"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Z_INDEX } from "@/utils/z-index";
import { useRouter } from "next/navigation";

const RequestProcurementButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const router = useRouter();
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-lime-300 p-2 px-6 text-center font-semibold text-green-100 lg:text-md md:text-[12px]",
        className
      )}
      onClick={(e) => {
        console.log("Procurement requested");
        router.push("/contact-us");
        onClick?.(e);
      }}
      {...props}
      style={{ zIndex: Z_INDEX.REQUEST_PROCUREMENT }}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-100 transition-all duration-1000 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-800 group-hover:translate-x-12 group-hover:opacity-0 text-nowrap">
          Request Procurement
        </span>
      </div>
      <div className="absolute top-0 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-lime-100 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-nowrap">Request Procurement</span>
        <ArrowRight />
      </div>
    </button>
  );
});

RequestProcurementButton.displayName = "RequestProcurementButton";

export default RequestProcurementButton;
