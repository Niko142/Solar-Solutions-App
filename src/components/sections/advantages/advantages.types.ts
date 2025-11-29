export interface AdvantagesItemsProps {
  id: string;
  title: string;
  description: string;
}

export type AdvantageCardProps = {
  advantage: AdvantagesItemsProps;
};

export type AdvantagesListProps = {
  cards: AdvantagesItemsProps[];
};
