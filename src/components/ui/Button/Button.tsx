import clsx from "clsx";
import type { PrimaryButtonProps } from "./button.types";
import { primaryBtnVariants } from "./button.variants";

export const Button = ({
  className = "",
  variant = "white",
  children,
  ...props
}: PrimaryButtonProps) => {
  const colors = primaryBtnVariants[variant];
  return (
    <button
      {...props}
      className={clsx(
        "rounded-5xl cursor-pointer px-7.5 py-2.5 text-left capitalize transition-colors duration-400 ease-in-out",
        colors.base,
        colors.hover,
        className,
      )}
    >
      {children}
    </button>
  );
};
