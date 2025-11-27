import type { IconBadgeTheme, TagBadgeTheme } from "@/types/theme.types";
import type { BadgeVariant } from "./badge.types";
import type { IconSize, IconSizeVariant } from "@/types/common.types";

export const tagBadgeVariants: Record<TagBadgeTheme, BadgeVariant> = {
  red: {
    color: "text-white",
    backgroundColor: "bg-red-600",
  },
  green: {
    color: "text-white",
    backgroundColor: "bg-green-700",
  },
  blue: {
    color: "text-white",
    backgroundColor: "bg-blue-600",
  },
};

export const iconBadgeVariants: Record<IconBadgeTheme, BadgeVariant> = {
  green: {
    color: "text-green-700",
    backgroundColor: "bg-green-100",
  },
  blue: {
    color: "text-blue-700",
    backgroundColor: "bg-blue-100",
  },
  purple: {
    color: "text-purple-700",
    backgroundColor: "bg-purple-100",
  },
};

export const sizeIconVariants: Record<IconSize, IconSizeVariant> = {
  sm: {
    container: "p-2 rounded-md",
    size: 20,
  },
  md: {
    container: "p-3 rounded-lg",
    size: 28,
  },
  lg: {
    container: "p-4 rounded-xl",
    size: 36,
  },
};
