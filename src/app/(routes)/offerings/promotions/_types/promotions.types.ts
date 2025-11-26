export interface PromotionsItemsProps {
  id: string | number;
  title: string;
  description: string;
  tag: string;
  borderColor: "border-red-500" | "border-blue-500" | "border-green-500";
  tagColor: "bg-red-600" | "bg-blue-600" | "bg-green-700";
  highlightPrefix: string;
  highlightColor: "text-red-600" | "text-blue-500" | "text-green-600";
  highlightText: string;
}

export interface PromoCardProps {
  promotion: PromotionsItemsProps;
}
