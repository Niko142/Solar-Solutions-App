import type { SolutionListProps } from "./hero.types";
import { HeroSolutionCard } from "./HeroSolutionCard";

export const HeroSolutionList = ({ title, items }: SolutionListProps) => {
  return (
    <div className="px-4 sm:px-10 md:px-12.5 lg:px-25 xl:px-37.5">
      <h2 className="mb-4 leading-normal sm:mb-[25px] md:leading-15 lg:leading-[85px]">
        {title}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7.5">
        {items.map((item, ind) => (
          <HeroSolutionCard key={ind} card={item} />
        ))}
      </div>
    </div>
  );
};
