import type { LucideIcon } from "lucide-react";
import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";

export type TPrice = `$${number}.${number}` | `$${number}`;

export type ThemeVariants = "white" | "black";

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export type ContactType = "phone" | "email";
export type SocialType = "facebook" | "twitter" | "instagram";

export interface BaseLink {
  icon: ImageProps["src"];
  alt: ImageProps["alt"];
  href: LinkProps["href"];
}

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

export interface FeatureCardProps {
  id: string | number;
  icon: LucideIcon;
  title: string;
  description: string;
  cardBg: "bg-blue-50" | "bg-purple-50" | "bg-green-50";
  iconBg: "bg-yellow-400" | "bg-gray-200" | "bg-red";
  iconColor: "text-white" | "text-black";
}

export interface TagBadgeProps {
  color: "bg-red-600" | "bg-green-700" | "bg-blue-600";
  children: React.ReactNode;
}
