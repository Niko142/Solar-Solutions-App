import type { PrimaryColorTheme } from "@/types/theme.types";
import type { PromoVariant } from "../_types/promotions.types";

export const promoVariants: Record<PrimaryColorTheme, PromoVariant> = {
  red: {
    border: "border-red-500",
    tagVariant: "red",
    highlight: "text-red-600",
  },
  blue: {
    border: "border-blue-500",
    tagVariant: "blue",
    highlight: "text-blue-500",
  },
  green: {
    border: "border-green-500",
    tagVariant: "green",
    highlight: "text-green-600",
  },
};
