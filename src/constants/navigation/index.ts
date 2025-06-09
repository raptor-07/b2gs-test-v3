export const SITE_NAVIGATION = {
  items: [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ],
} as const;

// Type exports
export type NavItem = (typeof SITE_NAVIGATION.items)[number];

// Navigation metadata
export const NAV_METADATA = {
  logo: {
    mobile: "/assets/logo/mobile/text-logo.png",
    desktop: "/assets/logo/desktop/text-logo.png",
    alt: "B2G Logo",
  },
} as const;

// Utility types
export type NavigationKeys = keyof typeof SITE_NAVIGATION.items;
export type LogoVariant = keyof typeof NAV_METADATA.logo;
