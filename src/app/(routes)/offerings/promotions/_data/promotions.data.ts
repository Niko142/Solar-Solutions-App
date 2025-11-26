import type { PromotionsItemsProps } from "../_types/promotions.types";

export const promotionsItems: PromotionsItemsProps[] = [
  {
    id: 1,
    title: "Solar Installation Special",
    tag: "Limited Time",
    description:
      "Get 30% off on complete solar panel installation. Includes free consultation and maintenance for first year.",
    borderColor: "border-red-500",
    tagColor: "bg-red-600",
    highlightPrefix: "Save",
    highlightColor: "text-red-600",
    highlightText: "$3,000",
  },
  {
    id: 2,
    title: "Cable Bundle Offer",
    tag: "Popular",
    description:
      "Internet + TV + Phone bundle at 50% off for first 6 months. No installation fees.",
    borderColor: "border-blue-500",
    tagColor: "bg-blue-600",
    highlightPrefix: "50%",
    highlightColor: "text-blue-500",
    highlightText: "OFF",
  },
  {
    id: 3,
    title: "Referral Program",
    tag: "Always Available",
    description:
      "Refer a friend and both get $100 credit on your next service.",
    borderColor: "border-green-500",
    tagColor: "bg-green-700",
    highlightPrefix: "Credit",
    highlightColor: "text-green-600",
    highlightText: "100$",
  },
];
