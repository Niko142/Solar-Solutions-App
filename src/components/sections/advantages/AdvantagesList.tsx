import { AdvantageCard } from "./AdvantageCard";
import type { AdvantagesListProps } from "./advantages.types";

export const AdvantagesList = ({ cards }: AdvantagesListProps) => {
  return (
    <>
      {cards.map((card) => (
        <AdvantageCard key={card.id} advantage={card} />
      ))}
    </>
  );
};
