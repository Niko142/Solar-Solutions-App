import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";

export interface OfferingItemsProps {
  id: number | string;
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  href: LinkProps["href"];
  title: string;
  description: string;
}

export type OfferingCardProps = {
  card: OfferingItemsProps;
};

export interface OfferingListProps {
  items: OfferingItemsProps[];
}
