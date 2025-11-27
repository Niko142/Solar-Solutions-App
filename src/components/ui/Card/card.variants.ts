import type { FeatureCardTheme } from "@/types/theme.types";
import type { FeatureCardVariant } from "./card.types";

export const featureCardVariants: Record<FeatureCardTheme, FeatureCardVariant> =
  {
    blue: {
      cardBg: "bg-blue-50",
      iconBg: "bg-yellow-400",
      iconColor: "text-white",
    },
    purple: {
      cardBg: "bg-purple-50",
      iconBg: "bg-gray-300",
      iconColor: "text-black",
    },
    green: {
      cardBg: "bg-green-50",
      iconBg: "bg-red-600",
      iconColor: "text-white",
    },
  };
