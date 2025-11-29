import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReturnButtonProps } from "./button.types";
import { btnReturnVariants } from "./button.variants";

export const ReturnButton = ({
  path,
  description = "Return",
  variant,
}: ReturnButtonProps) => {
  const colors = btnReturnVariants[variant];
  return (
    <Link
      href={path}
      className={clsx(
        "font-poppins inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white shadow-md outline-0 transition-colors duration-300 ease-in-out",
        colors.base,
        colors.hover,
        colors.focus,
      )}
    >
      <ArrowLeft size={24} /> {description}
    </Link>
  );
};
