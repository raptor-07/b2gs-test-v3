// Export the main component (backwards compatibility)
export { default as Header } from "./components/server/HeaderRoot";

// Export server components
export { LogoImage } from "./components/server/LogoImage";

// Export client components
export { NavigationMenu } from "./components/client/NavigationMenu";
export { MenuToggle } from "./components/client/MenuToggle";
// export { MobileDrawer } from "./components/client/MobileDrawer";
export { HeaderContent } from "./components/client/HeaderContent";

// Export types
export type {
  NavItem,
  NavbarProps,
  MenuButtonProps,
  // MobileDrawerProps,
  LogoImageProps,
  HeaderContentProps
} from "./types";
