import clsx from "clsx";
import type { TagBadgeProps } from "./badge.types";
import { tagBadgeVariants } from "./badge.variants";

export const TagBadge = ({ children, variant }: TagBadgeProps) => {
  const theme = tagBadgeVariants[variant];
  return (
    <aside
      className={clsx(
        "font-poppins rounded-full px-3 text-sm font-semibold sm:py-1",
        theme.color,
        theme.backgroundColor,
      )}
    >
      {children}
    </aside>
  );
};
