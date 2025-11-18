import { Header } from "@/components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-20.5 sm:pt-[99px] md:pt-[123px]">
      <Header />
      {children}
    </div>
  );
}
