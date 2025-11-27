import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";

export type TPrice = `$${number}.${number}` | `$${number}`;

export type TPeriod = "Day" | "Week" | "Month" | "Year";

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export type IconSize = "sm" | "md" | "lg";
export type IconSizeVariant = {
  container: string;
  size: number;
};

export type ContactType = "phone" | "email";
export type SocialType = "facebook" | "twitter" | "instagram";

export type BaseLink = {
  icon: ImageProps["src"];
  alt: ImageProps["alt"];
  href: LinkProps["href"];
};

export interface PageLayoutProps extends BaseLayoutProps {
  bg?: string;
  className?: string;
}

export interface PageHeaderProps {
  title: string;
  description: string;
}

export interface LogoProps {
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}
