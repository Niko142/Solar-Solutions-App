import { AdvantageCard } from "./AdvantageCard";
import type { AdvantageCardProps } from "./advantages.types";

export const AdvantagesList = ({ cards }: { cards: AdvantageCardProps[] }) => {
  return (
    <>
      {cards.map((item, ind) => (
        <AdvantageCard key={ind} {...item} />
      ))}
    </>
  );
};
