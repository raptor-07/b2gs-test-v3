import Image from "next/image";
import { NAV_METADATA } from "@/constants/navigation";
import type { LogoImageProps } from "../../types";

export function LogoImage({
  variant = "desktop",
  className,
  ...props
}: LogoImageProps) {
  const imagePath = NAV_METADATA.logo[variant];

  return (
    <Image
      src={imagePath}
      alt={NAV_METADATA.logo.alt}
      width={variant === "mobile" ? 64 : 128}
      height={32}
      priority
      className={className}
      {...props}
    />
  );
}
