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
}

export interface MobileOverlayProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface LogoImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  variant: "mobile" | "desktop";
}

export interface HeaderContentProps {
  items: NavItem[];
}
