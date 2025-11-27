import clsx from "clsx";
import { TagBadge } from "@/components/ui/Badge";
import { promoVariants } from "../_data/promotions.variants";
import type { PromoCardProps } from "../_types/promotions.types";

export const PromoCard = ({ promotion }: PromoCardProps) => {
  const colorTheme = promoVariants[promotion.variant];
  return (
    <article
      className={clsx(
        "flex flex-col gap-3 rounded-xl border-l-4 bg-white p-4 shadow-lg sm:rounded-2xl sm:p-5 md:p-6",
        colorTheme.border,
      )}
    >
      <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-0">
        <h2 className="deals text-xl font-bold">{promotion.title}</h2>
        <TagBadge variant={colorTheme.tagVariant}>{promotion.tag}</TagBadge>
      </div>
      <p className="text-base text-gray-600">{promotion.description}</p>
      <p className="font-poppins text-2xl font-semibold text-gray-600">
        <span className={`${colorTheme.highlight}`}>
          {promotion.highlightPrefix}
        </span>{" "}
        {promotion.highlightText}
      </p>
    </article>
  );
};
