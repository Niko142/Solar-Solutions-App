import type { ImageProps } from "next/image";

export interface SolutionItemsProps {
  title: string;
  description: string;
  src: ImageProps["src"];
  alt: ImageProps["alt"];
}

export type SolutionCardProps = {
  card: SolutionItemsProps;
};

export interface SolutionListProps {
  title: string;
  items: SolutionItemsProps[];
}
