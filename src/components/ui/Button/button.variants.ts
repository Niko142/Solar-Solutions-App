import type {
  PrimaryButtonTheme,
  ReturnButtonTheme,
} from "@/types/theme.types";
import type { PrimaryButtonVariant, ReturnButtonVariant } from "./button.types";

export const primaryBtnVariants: Record<
  PrimaryButtonTheme,
  PrimaryButtonVariant
> = {
  white: {
    base: "bg-white text-black",
    hover: "hover:bg-gray-200",
  },
  black: {
    base: "bg-black text-white",
    hover: "hover:bg-gray-900",
  },
};

export const btnReturnVariants: Record<ReturnButtonTheme, ReturnButtonVariant> =
  {
    red: {
      base: "bg-red-600",
      hover: "hover:bg-red-700",
      focus: "focus-visible:bg-red-700",
    },
    blue: {
      base: "bg-blue-600",
      hover: "hover:bg-blue-700",
      focus: "focus-visible:bg-blue-700",
    },
    green: {
      base: "bg-green-600",
      hover: "hover:bg-green-700",
      focus: "focus-visible:bg-green-700",
    },
    violet: {
      base: "bg-violet-600",
      hover: "hover:bg-violet-800",
      focus: "focus-visible:bg-violet-800",
    },
  };
