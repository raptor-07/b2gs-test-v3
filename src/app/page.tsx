import { Header } from "@/ui/header";
import HeroSection from "@/ui/sections/hero";
import ChallengesSection from "@/ui/sections/challenges";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <ChallengesSection />
      </div>
    </main>
  );
}
