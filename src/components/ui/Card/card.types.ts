import type { LucideIcon } from "lucide-react";
import type { FeatureCardTheme } from "@/types/theme.types";

export interface FeatureItemsProps {
  id: string | number;
  icon: LucideIcon;
  title: string;
  description: string;
  theme: FeatureCardTheme;
}

export type FeatureCardVariant = {
  cardBg: string;
  iconBg: string;
  iconColor: string;
};

export type FeatureCardProps = {
  items: FeatureItemsProps;
};
