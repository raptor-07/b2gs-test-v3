import { SITE_NAVIGATION } from "@/constants/navigation";
import { combineWithZIndex } from "@/utils/styles";
import { HeaderContent } from "../client/HeaderContent";

export default function Header() {
  return (
    <header
      className={combineWithZIndex(
        "sticky top-0 w-full border-b bg-white/80 backdrop-blur-sm",
        "header"
      )}
    >
      <div>
        <HeaderContent items={SITE_NAVIGATION.items} />
      </div>
    </header>
  );
}

// Named export for consistency with the rest of the components
export { Header };
