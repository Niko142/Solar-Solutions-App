import clsx from "clsx";
import type { TagBadgeProps } from "@/types/common.types";

export const TagBadge = ({ children, color }: TagBadgeProps) => {
  return (
    <aside
      className={clsx(
        "font-poppins rounded-full px-3 text-sm font-semibold text-white sm:py-1",
        color,
      )}
    >
      {children}
    </aside>
  );
};
