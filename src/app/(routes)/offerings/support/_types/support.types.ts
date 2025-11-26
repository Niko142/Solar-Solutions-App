import type { LucideIcon } from "lucide-react";

export interface SupportOpportunitiesProps {
  icon: LucideIcon;
  bgColor: "bg-green-100" | "bg-blue-100" | "bg-purple-100";
  iconColor: "text-green-700" | "text-blue-700" | "text-purple-700";
  title: string;
  description: string;
}

export interface SupportListProps {
  title: string;
  opportunities: SupportOpportunitiesProps[];
}
