import clsx from "clsx";
import { TagBadge } from "@/components/ui/Badge";
import type { PromoCardProps } from "../_types/promotions.types";

export const PromoCard = ({ promotion }: PromoCardProps) => {
  return (
    <article
      className={clsx(
        "flex flex-col gap-3 rounded-xl border-l-4 bg-white p-4 shadow-lg sm:rounded-2xl sm:p-5 md:p-6",
        promotion.borderColor,
      )}
    >
      <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-0">
        <h2 className="deals text-xl font-bold">{promotion.title}</h2>
        <TagBadge color={`${promotion.tagColor}`}>{promotion.tag}</TagBadge>
      </div>
      <p className="text-base text-gray-600">{promotion.description}</p>
      <p className="font-poppins text-2xl font-semibold text-gray-600">
        <span className={`${promotion.highlightColor}`}>
          {promotion.highlightPrefix}
        </span>{" "}
        {promotion.highlightText}
      </p>
    </article>
  );
};
