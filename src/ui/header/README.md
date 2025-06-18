# Header Component

A responsive header component with mobile menu support and animations.

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth loading transitions with skeleton states
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
│   ├── server/
│   │   ├── HeaderRoot.tsx   # Server component container
│   │   └── LogoImage.tsx    # Server component for logo
│   └── client/
│       ├── HeaderContent.tsx   # Client component with loading states
│       ├── NavigationMenu.tsx  # Desktop navigation
│       ├── MenuToggle.tsx      # Mobile menu button
│       └── MobileDrawer.tsx    # Mobile drawer menu
├── types.ts             # TypeScript type definitions
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

## Performance Optimizations

### Loading States
- Implements skeleton loading during hydration
- Prevents flash of wrong layout
- Smooth transition from loading to interactive state

### Server/Client Splitting
- Server components for static content
- Client components only where needed
- Proper hydration handling

### Media Query Optimization
- Efficient screen size detection
- Proper SSR support
- No layout shifts during hydration

## Components

### HeaderRoot (Server)
The main container component that provides the layout structure.

### LogoImage (Server)
Server component that handles responsive logo rendering.

### HeaderContent (Client)
Manages responsive layout and loading states.
- Shows skeleton loader during hydration
- Handles screen size detection
- Manages mobile menu state

### NavigationMenu (Client)
Desktop navigation with hover animations.

### MenuToggle (Client)
Mobile menu button with animations.

### MobileDrawer (Client)
Mobile drawer menu with animations and transitions.

## Customization

Navigation items can be customized by modifying the `navItems` array in `HeaderRoot.tsx`:

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
6. Test loading states and hydration
