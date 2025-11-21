import type { BaseLayoutProps } from "@/types/common.types";

export const LayoutContainer = ({ children }: BaseLayoutProps) => {
  return <div className="mx-auto max-w-[1440px]">{children}</div>;
};
