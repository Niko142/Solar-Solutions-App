import Image from "next/image";
import { LayoutContainer } from "@/shared/components";
import { solutionItems } from "@/shared/data/solutions";
import { SolutionCard } from "./SolutionCard";

export const IntroSection = () => {
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
          <h1 className="font-poppins absolute top-[50%] left-[1%] max-w-80 -translate-y-[50%] text-left text-white uppercase sm:left-[5%] md:max-w-100 lg:max-w-125 xl:max-w-145">
            Solar <span className="text-red">Solutions</span> for a Sustainable
            Tomorrow
            <span className="text-red">.</span>
          </h1>
        </div>

        <div className="px-4 sm:px-10 md:px-12.5 lg:px-25 xl:px-37.5">
          <h2 className="font-poppins mb-4 leading-normal sm:mb-[25px] md:leading-15 lg:leading-[85px]">
            Our Expertise and Experience
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7.5">
            {solutionItems.map((item, ind) => (
              <SolutionCard key={ind} {...item} />
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};
