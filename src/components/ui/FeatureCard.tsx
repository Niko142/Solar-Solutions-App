import clsx from "clsx";
import type { FeatureCardProps } from "@/types/common.types";

export const FeatureCard = ({
  cardBg,
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <article
      className={clsx(
        "flex flex-col items-center gap-2 rounded-xl p-4 text-center sm:p-6",
        cardBg,
      )}
    >
      <span className={clsx("inline-flex rounded-full p-2", iconBg)}>
        <Icon
          size={40}
          className={clsx("h-6 w-6 md:h-10 md:w-10", iconColor)}
        />
      </span>
      <h2 style={{ fontSize: "initial" }} className="font-semibold">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};
