import { SITE_NAVIGATION } from "@/constants/navigation";
import { Z_INDEX } from "@/constants/styles/z-index";
import { HeaderContent } from "../client/HeaderContent";

export default function Header() {
  return (
    <header
      className="sticky top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-mint-900 backdrop-blur-sm shadow-sm"
      style={{ zIndex: Z_INDEX.header }}
    >
      <div className="mx-auto max-w-[2000px]">
        <HeaderContent items={SITE_NAVIGATION.items} />
      </div>
    </header>
  );
}

// Named export for consistency with the rest of the components
export { Header };
