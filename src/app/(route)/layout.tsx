import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Solutions | Energy & Connectivity Services",
  description:
    "Your trusted partner for solar energy solutions and cable services. Explore renewable energy options, high-speed internet, exclusive deals, and professional support all in one place.",
};

export default function OfferingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
}
