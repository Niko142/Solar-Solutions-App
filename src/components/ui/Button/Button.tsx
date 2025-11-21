import clsx from "clsx";
import type { ButtonProps } from "./button.types";
import { btnVariantsStyles } from "./button.variants";

export const Button = ({
  children,
  variant = "white",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-5xl cursor-pointer px-7.5 py-2.5 text-left capitalize transition-colors duration-400 ease-in-out",
        btnVariantsStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
