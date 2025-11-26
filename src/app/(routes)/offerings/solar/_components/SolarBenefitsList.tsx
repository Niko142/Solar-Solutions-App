import type { BenefitsListProps } from "../_types/solar.types";

export const SolarBenefitsList = ({ title, benefits }: BenefitsListProps) => {
  return (
    <div>
      <h2 className="service mb-4 leading-tight font-semibold capitalize">
        {title}
      </h2>
      <ul className="list-inside list-disc space-y-1 text-base/normal text-gray-600 marker:text-xl marker:text-yellow-400 md:space-y-3">
        {benefits.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};
