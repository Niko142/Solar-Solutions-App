import type { FeatureItemsProps } from "@/components/ui/Card";
import type { TPrice } from "@/types/common.types";

export interface CableFeaturesListProps {
  features: FeatureItemsProps[];
}

export interface CablePackagesProps {
  id: string | number;
  name: string;
  price: TPrice;
  period?: string;
}

export interface CablePackagesListProps {
  packages: CablePackagesProps[];
}
