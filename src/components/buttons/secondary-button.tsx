"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  link?: string;
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, link, ...props }, ref) => {
    if (link) {
      return (
        <Link href={link} passHref legacyBehavior>
          <a tabIndex={0} className={cn("inline-block", className)}>
            <button
              ref={ref}
              className={cn(
                "px-4 py-2 rounded-full flex gap-2 items-center justify-center",
                className
              )}
              {...props}
              type="button"
            >
              {children}
            </button>
          </a>
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-full flex gap-2 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SecondaryButton.displayName = "SecondaryButton";

export default SecondaryButton;
