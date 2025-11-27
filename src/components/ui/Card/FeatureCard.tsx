import clsx from "clsx";
import type { FeatureCardProps } from "./card.types";
import { featureCardVariants } from "./card.variants";

export const FeatureCard = ({ items }: FeatureCardProps) => {
  const colorTheme = featureCardVariants[items.theme];
  return (
    <article
      className={clsx(
        "flex flex-col items-center gap-2 rounded-xl p-4 text-center sm:p-6",
        colorTheme.cardBg,
      )}
    >
      <span className={clsx("inline-flex rounded-full p-2", colorTheme.iconBg)}>
        <items.icon
          size={40}
          className={clsx("h-6 w-6 md:h-10 md:w-10", colorTheme.iconColor)}
        />
      </span>
      <h2 style={{ fontSize: "initial" }} className="font-semibold">
        {items.title}
      </h2>
      <p className="text-gray-600">{items.description}</p>
    </article>
  );
};
