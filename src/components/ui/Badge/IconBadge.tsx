import clsx from "clsx";
import type { IconBadgeProps } from "./badge.types";
import { iconBadgeVariants, sizeIconVariants } from "./badge.variants";

export const IconBadge = ({
  icon: Icon,
  size = "md",
  variant,
  className = "",
}: IconBadgeProps) => {
  const colorConfig = iconBadgeVariants[variant];
  const sizesConfig = sizeIconVariants[size];
  return (
    <span
      className={clsx(
        sizesConfig.container,
        colorConfig.backgroundColor,
        className,
      )}
    >
      <Icon size={sizesConfig.size} className={clsx(colorConfig.color)} />
    </span>
  );
};
