import { AboutSection } from "@/components/about-us";
import { AdvantagesSection } from "@/components/advantages";
import { IntroSection } from "@/components/intro";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AdvantagesSection />
      <AboutSection />
    </main>
  );
}
