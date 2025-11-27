import type { TagBadgeProps } from "@/components/ui/Badge";
import type { PrimaryColorTheme } from "@/types/theme.types";

export type PromoVariant = {
  border: string;
  tagVariant: PrimaryColorTheme;
  highlight: string;
};

export interface PromotionsItemsProps {
  id: string | number;
  title: string;
  description: string;
  tag: TagBadgeProps["children"];
  highlightPrefix: string;
  highlightText: string;
  variant: PrimaryColorTheme;
}

export interface PromoCardProps {
  promotion: PromotionsItemsProps;
}
