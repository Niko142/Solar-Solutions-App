import { Header } from "@/components/header";
import type { BaseLayoutProps } from "@/types/common.types";

export default function MainLayout({ children }: Readonly<BaseLayoutProps>) {
  return (
    <div className="pt-20.5 sm:pt-[99px] md:pt-[123px]">
      <Header />
      {children}
    </div>
  );
}
