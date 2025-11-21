import { FooterCopyright } from "./FooterCopyright";
import { FooterHeader } from "./FooterHeader";
import { FooterMain } from "./FooterMain";

export const Footer = () => {
  return (
    <footer className="font-roboto bg-black text-white">
      <FooterHeader />
      <hr className="bg-white opacity-20" />
      <FooterMain />
      <hr className="bg-white opacity-20" />
      <FooterCopyright />
    </footer>
  );
};
