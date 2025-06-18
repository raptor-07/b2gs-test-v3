import { SITE_NAVIGATION } from "@/constants/navigation";
import { Z_INDEX } from "@/constants/styles/z-index";
import { HeaderContent } from "../client/HeaderContent";

export default function Header() {
  return (
    <header
      className="sticky top-0 w-full border-b bg-white/80 backdrop-blur-sm"
      style={{ zIndex: Z_INDEX.header }}
    >
      <div>
        <HeaderContent items={SITE_NAVIGATION.items} />
      </div>
    </header>
  );
}

// Named export for consistency with the rest of the components
export { Header };
