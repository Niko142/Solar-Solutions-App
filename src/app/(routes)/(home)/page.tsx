import { Footer } from "@/components/footer";
import { OfferingsSection } from "@/components/sections/offerings";
import { AboutSection } from "@/components/sections/about";
import { AdvantagesSection } from "@/components/sections/advantages";
import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AdvantagesSection />
        <AboutSection />
        <OfferingsSection />
      </main>
      <Footer />
    </>
  );
}
