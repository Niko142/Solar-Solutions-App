import { ChartBar, MessageCircle, Wrench } from "lucide-react";
import type { SupportOpportunitiesProps } from "../_types/support.types";

export const supportOpportunities: SupportOpportunitiesProps[] = [
  {
    icon: MessageCircle,
    bgColor: "bg-green-100",
    iconColor: "text-green-700",
    title: "Free Consultation",
    description: "30-minute free session to understand your needs",
  },
  {
    icon: ChartBar,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
    title: "Custom Solutions",
    description: "Tailored recommendations for your specific situation",
  },
  {
    icon: Wrench,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-700",
    title: "Ongoing Support",
    description: "24/7 customer support and maintenance",
  },
];
