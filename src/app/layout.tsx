import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import type { BaseLayoutProps } from "@/types/common.types";
import "@/assets/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Solar Solutions",
  description: `Company provides sustainable solar energy solutions and reliable 
  telecom services, including internet, phone, and cable. We are building a greener, more connected tomorrow`,
};

export default function RootLayout({ children }: Readonly<BaseLayoutProps>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${roboto.variable}`}
    >
      <body className="bg-black">{children}</body>
    </html>
  );
}
