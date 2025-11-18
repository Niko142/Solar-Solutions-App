import type { ImageProps } from "next/image";

export interface SolutionItemsProps {
  title: string;
  description: string;
  src: ImageProps["src"];
  alt: ImageProps["alt"];
}

export type SolutionCardProps = SolutionItemsProps;
