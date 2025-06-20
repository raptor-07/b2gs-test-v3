// import { Header } from "@/ui/header";
// import HeroSection from "@/ui/sections/hero";
import ChallengesSection from "@/ui/sections/challenges";
// import { InterconnectedSection } from "@/ui/sections/interconnected";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <div className="flex flex-col">
        {/* <HeroSection /> */}
        <ChallengesSection />
        {/* <InterconnectedSection /> */}
      </div>
    </main>
  );
}
