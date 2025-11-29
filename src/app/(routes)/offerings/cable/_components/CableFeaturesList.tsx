import { FeatureCard } from "@/components/ui/Card";
import type { CableFeaturesListProps } from "../_types/cable.types";

export const CableFeaturesList = ({ features }: CableFeaturesListProps) => {
  return (
    <div className="mb-4 grid gap-6 sm:mb-8 md:grid-cols-3">
      {features.map((card) => (
        <FeatureCard key={card.id} items={card} />
      ))}
    </div>
  );
};
