import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";

export interface OfferingItemsProps {
  id: number | string;
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  title: string;
  description: string;
  href: LinkProps["href"];
}

export type OfferingCardProps = OfferingItemsProps;
