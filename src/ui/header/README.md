# Header Component

A responsive header component with mobile menu support and animations.

## Features

- Responsive design (mobile, tablet, desktop)
- Animated mobile drawer menu
- Reduced motion support
- Server/Client component separation
- TypeScript support

## Structure

```
header/
├── animations/
│   └── variants.ts       # Framer Motion animation variants
├── components/
│   ├── Logo.tsx         # Server component for logo
│   ├── MenuButton.tsx   # Client component for hamburger menu
│   ├── MobileMenu.tsx   # Client component for mobile drawer
│   └── Navigation.tsx   # Client component for desktop nav
├── types.ts             # TypeScript type definitions
├── Header.tsx           # Main header component
└── index.ts            # Barrel exports

```

## Usage

```tsx
import { Header } from "@/ui/header";

export default function Layout() {
  return (
    <>
      <Header />
      {/* Other content */}
    </>
  );
}
```

## Components

### Header
The main container component that orchestrates all subcomponents.

### Logo
Server component that handles responsive logo rendering.

### Navigation
Client component for desktop navigation with hover animations.

### MenuButton
Client component for the mobile menu hamburger button with animations.

### MobileMenu
Client component for the mobile drawer menu with animations and transitions.

## Customization

Navigation items can be customized by modifying the `navItems` array in `Header.tsx`:

```tsx
const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  // ...
];
```

## Animations

Uses Framer Motion for animations with:
- Spring physics for natural movement
- Reduced motion support for accessibility
- Smooth transitions for menu items
- Hover effects for navigation links

## Development

When making changes:
1. Keep client components minimal
2. Use server components where possible
3. Maintain accessibility features
4. Test responsive behavior
5. Consider reduced motion preferences
