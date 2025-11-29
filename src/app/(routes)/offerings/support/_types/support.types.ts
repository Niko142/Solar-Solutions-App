import type { LucideIcon } from "lucide-react";
import type { IconBadgeTheme } from "@/types/theme.types";

export interface SupportOpportunitiesProps {
  icon: LucideIcon;
  variant: IconBadgeTheme;
  title: string;
  description: string;
}

export interface SupportListProps {
  title: string;
  opportunities: SupportOpportunitiesProps[];
}
