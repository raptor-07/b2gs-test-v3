import Image, { ImageProps } from "next/image";
import { cn } from "@/utils/cn";

interface LogoImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  variant: "mobile" | "desktop";
}

export function LogoImage({ 
  variant = "desktop",
  className,
  ...props 
}: LogoImageProps) {
  const imagePath = variant === "mobile"
    ? "/assets/logo/mobile/text-logo.png"
    : "/assets/logo/desktop/text-logo.png";
  
  return (
    <Image
      src={imagePath}
      alt="Logo"
      width={variant === "mobile" ? 64 : 128}
      height={32}
      priority
      className={cn("object-contain", className)}
      {...props}
    />
  );
}
