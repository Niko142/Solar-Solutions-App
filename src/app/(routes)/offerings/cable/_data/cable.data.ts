import { Phone, Tv, Zap } from "lucide-react";
import type { FeatureCardProps } from "@/types/common.types";
import type { CablePackagesProps } from "../_types/cable.types";

export const cableFeatures: FeatureCardProps[] = [
  {
    id: 1,
    icon: Zap,
    title: "High-Speed Internet",
    description: "Up to 1 Gbps speeds",
    cardBg: "bg-blue-50",
    iconBg: "bg-yellow-400",
    iconColor: "text-white",
  },
  {
    id: 2,
    icon: Tv,
    title: "TV Packages",
    description: "200+ channels",
    cardBg: "bg-purple-50",
    iconBg: "bg-gray-200",
    iconColor: "text-black",
  },
  {
    id: 3,
    icon: Phone,
    title: "Phone Services",
    description: "Unlimited calling",
    cardBg: "bg-green-50",
    iconBg: "bg-red",
    iconColor: "text-white",
  },
];

export const cablePackages: CablePackagesProps[] = [
  { id: 1, name: "Basic Internet + TV", price: "$59.99" },
  { id: 2, name: "Premium Bundle", price: "$89.99" },
];
