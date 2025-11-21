import Image from "next/image";
import { LayoutContainer } from "@/components/layout";
import { HeroSolutionList } from "./HeroSolutionList";
import { solutionItems } from "./hero.data";

export const HeroSection = () => {
  return (
    <section className="pt-8.5 pb-28.5" id="home">
      <LayoutContainer>
        <div className="relative mb-10 sm:mb-18 md:mx-10 md:mb-20 lg:mx-19 lg:mb-29.5">
          <Image
            src={"/background.webp"}
            alt="Background image"
            className="object-cover"
            width={1280}
            height={602}
          />
          <h1 className="absolute top-[50%] left-[1%] max-w-80 -translate-y-[50%] text-left text-white uppercase sm:left-[5%] md:max-w-100 lg:max-w-125 xl:max-w-145">
            Solar <span className="text-red">Solutions</span> for a Sustainable
            Tomorrow
            <span className="text-red">.</span>
          </h1>
        </div>

        <HeroSolutionList
          title="Our Expertise and Experience"
          cards={solutionItems}
        />
      </LayoutContainer>
    </section>
  );
};
