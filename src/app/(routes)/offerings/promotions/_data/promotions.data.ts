import type { PromotionsItemsProps } from "../_types/promotions.types";

export const promotionsItems: PromotionsItemsProps[] = [
  {
    id: 1,
    title: "Solar Installation Special",
    tag: "Limited Time",
    description:
      "Get 30% off on complete solar panel installation. Includes free consultation and maintenance for first year.",
    highlightPrefix: "Save",
    highlightText: "$3,000",
    variant: "red",
  },
  {
    id: 2,
    title: "Cable Bundle Offer",
    tag: "Popular",
    description:
      "Internet + TV + Phone bundle at 50% off for first 6 months. No installation fees.",
    highlightPrefix: "50%",
    highlightText: "OFF",
    variant: "blue",
  },
  {
    id: 3,
    title: "Referral Program",
    tag: "Always Available",
    description:
      "Refer a friend and both get $100 credit on your next service.",
    highlightPrefix: "Credit",
    highlightText: "100$",
    variant: "green",
  },
];
