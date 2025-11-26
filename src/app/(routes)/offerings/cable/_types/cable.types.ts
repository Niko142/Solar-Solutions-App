import type { FeatureCardProps, TPrice } from "@/types/common.types";

export interface CableFeaturesListProps {
  features: FeatureCardProps[];
}

export interface CablePackagesProps {
  id: string | number;
  name: string;
  price: TPrice;
}

export interface CablePackagesListProps {
  packages: CablePackagesProps[];
}
