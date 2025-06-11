import Image from "next/image";
import { NAV_METADATA } from "@/constants/navigation";
import type { LogoImageProps } from "../../types";

export function LogoImage({
  variant = "desktop",
  className,
  ...props
}: LogoImageProps) {
  const imagePath = NAV_METADATA.logo[variant];

  // Use proportional dimensions based on variant
  const dimensions =
    variant === "mobile"
      ? { width: 64, height: 16 } // 4:1 ratio
      : { width: 128, height: 32 }; // 4:1 ratio

  return (
    <Image
      src={imagePath}
      alt={NAV_METADATA.logo.alt}
      {...dimensions}
      fetchPriority="high"
      style={{ height: 'auto' }}
      className={className}
      {...props}
    />
  );
}
