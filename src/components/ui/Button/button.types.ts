import type { LinkProps } from "next/link";
import type {
  PrimaryButtonTheme,
  ReturnButtonTheme,
} from "@/types/theme.types";

export interface PrimaryButtonProps {
  children: React.ReactNode;
  variant?: PrimaryButtonTheme;
  className?: string;
}

export interface ReturnButtonProps {
  path: LinkProps["href"];
  variant: ReturnButtonTheme;
  description?: string;
}

export type PrimaryButtonVariant = {
  base: string;
  hover: string;
};

export type ReturnButtonVariant = {
  base: string;
  hover: string;
  focus: string;
};
