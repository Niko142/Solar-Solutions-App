import { ChartBar, MessageCircle, Wrench } from "lucide-react";
import type { SupportOpportunitiesProps } from "../_types/support.types";

export const supportOpportunities: SupportOpportunitiesProps[] = [
  {
    icon: MessageCircle,
    variant: "green",
    title: "Free Consultation",
    description: "30-minute free session to understand your needs",
  },
  {
    icon: ChartBar,
    variant: "blue",
    title: "Custom Solutions",
    description: "Tailored recommendations for your specific situation",
  },
  {
    icon: Wrench,
    variant: "purple",
    title: "Ongoing Support",
    description: "24/7 customer support and maintenance",
  },
];
