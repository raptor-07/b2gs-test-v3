import { ImageProps } from "next/image";
import { SITE_NAVIGATION } from "@/constants/navigation";

export type NavItem = (typeof SITE_NAVIGATION.items)[number];

export interface NavbarProps {
  items: readonly NavItem[];
}

export interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface MobileOverlayProps {
  items: readonly NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface LogoImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  variant: "mobile" | "desktop";
}

export interface HeaderContentProps {
  items: readonly NavItem[];
}
