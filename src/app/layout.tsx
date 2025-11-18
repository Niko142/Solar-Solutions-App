import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Solar Solutions",
  description: `Company provides sustainable solar energy solutions and reliable 
  telecom services, including internet, phone, and cable. We are building a greener, more connected tomorrow`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
