import { combineWithZIndex } from "@/utils/styles";
import { HeaderContent } from "../client/HeaderContent";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header 
      className={combineWithZIndex(
        "sticky top-0 w-full border-b bg-white/80 backdrop-blur-sm",
        "header"
      )}
    >
      <div className="">
        <HeaderContent items={navItems} />
      </div>
    </header>
  );
}

// Named export for consistency with the rest of the components
export { Header };
