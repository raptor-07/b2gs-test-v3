import { NavColorScheme } from "@/ui/hooks/useBackgroundAwareNavbar";

export interface NavItem {
  name: string;
  href: string;
  icon: {
    light: string;
    dark: string;
  };
}

export interface NavbarProps {
  className?: string;
  colorChangeRefs?: React.RefObject<HTMLElement>[];
  topOffset?: number;
}

export interface NavLinkProps {
  item: NavItem;
  colorScheme: NavColorScheme;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  colorScheme: NavColorScheme;
}

export interface DesktopNavProps {
  colorScheme: NavColorScheme;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: {
      light: "/assets/icons-light/icon-logo-light.png",
      dark: "/assets/icons-dark/icon-logo-dark.png",
    },
  },
  {
    name: "Services",
    href: "/services",
    icon: {
      light: "/assets/icons-light/icon-services-light.png",
      dark: "/assets/icons-dark/icon-services-dark.png",
    },
  },
  {
    name: "About",
    href: "/about-us",
    icon: {
      light: "/assets/icons-light/icon-about-us-light.png",
      dark: "/assets/icons-dark/icon-about-us-dark.png",
    },
  },
  {
    name: "Resources",
    href: "/resources",
    icon: {
      light: "/assets/icons-light/icon-resources-light.png",
      dark: "/assets/icons-dark/icon-resources-dark.png",
    },
  },
  {
    name: "Contact",
    href: "/contact-us",
    icon: {
      light: "/assets/icons-light/icon-phone-light.png",
      dark: "/assets/icons-dark/icon-phone-dark.png",
    },
  },
];
