import type { LinkProps } from "next/link";
import type { ThemeVariants } from "@/types/common.types";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ThemeVariants;
  className?: string;
}

export interface ReturnButtonProps {
  path: LinkProps["href"];
  color: string;
  hover?: string;
  focusVisible?: string;
  description?: string;
}
