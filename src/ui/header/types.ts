import { ImageProps } from "next/image";

export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarProps {
  items: NavItem[];
}

export interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  shouldReduceMotion?: boolean;
}

export interface MobileDrawerProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  shouldReduceMotion?: boolean;
}

export interface LogoImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  variant: "mobile" | "desktop";
}

export interface HeaderContentProps {
  items: NavItem[];
}
