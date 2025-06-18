"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

const DemoButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const router = useRouter();
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full bg-yellow-100 p-2 px-6 text-sm text-center font-semibold text-green-500",
        className
      )}
      onClick={(e) => {
        router.push("/");
        onClick?.(e);
      }}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500 dark:bg-lime-100 transition-all duration-1000 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-800 group-hover:translate-x-12 group-hover:opacity-0 text-nowrap">
          Book a Demo
        </span>
      </div>
      <div className="absolute top-0 flex h-full w-full translate-x-12 items-center justify-center gap-2 dark:text-green-500 text-lime-100 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-nowrap">Book a Demo</span>
        <ArrowRight />
      </div>
    </button>
  );
});

DemoButton.displayName = "DemoButton";

export default DemoButton;
