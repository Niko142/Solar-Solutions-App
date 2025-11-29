import clsx from "clsx";
import type { PageLayoutProps } from "@/types/common.types";

export const PageLayout = ({ bg, children }: PageLayoutProps) => {
  return (
    <main className={clsx("font-roboto min-h-screen py-8 md:py-12", bg)}>
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">{children}</div>
    </main>
  );
};
