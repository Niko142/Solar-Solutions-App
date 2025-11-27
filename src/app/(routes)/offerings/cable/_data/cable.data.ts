import { Phone, Tv, Zap } from "lucide-react";
import type { CablePackagesProps } from "../_types/cable.types";
import type { FeatureItemsProps } from "@/components/ui/Card";

export const cableFeatures: FeatureItemsProps[] = [
  {
    id: 1,
    icon: Zap,
    title: "High-Speed Internet",
    description: "Up to 1 Gbps speeds",
    theme: "blue",
  },
  {
    id: 2,
    icon: Tv,
    title: "TV Packages",
    description: "200+ channels",
    theme: "purple",
  },
  {
    id: 3,
    icon: Phone,
    title: "Phone Services",
    description: "Unlimited calling",
    theme: "green",
  },
];

export const cablePackages: CablePackagesProps[] = [
  { id: 1, name: "Basic Internet + TV", price: "$59.99" },
  { id: 2, name: "Premium Bundle", price: "$89.99" },
];
