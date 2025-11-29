import type { LucideIcon } from "lucide-react";
import type { IconSize } from "@/types/common.types";
import type { IconBadgeTheme, TagBadgeTheme } from "@/types/theme.types";

export type BadgeVariant = {
  color: string;
  backgroundColor: string;
};

export interface TagBadgeProps {
  children: React.ReactNode;
  variant: TagBadgeTheme;
}

export interface IconBadgeProps {
  icon: LucideIcon;
  size?: IconSize;
  variant: IconBadgeTheme;
  className?: string;
}
