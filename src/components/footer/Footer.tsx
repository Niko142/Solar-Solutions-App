import { FooterHead } from "./FooterHead";
import { FooterRights } from "./FooterRights";
import { FooterMainContent } from "./FooterMainContent";

export const Footer = () => {
  return (
    <footer className="font-roboto bg-black text-white">
      {/* Head */}
      <FooterHead />
      <hr className="bg-white opacity-20" />
      {/* Main info */}
      <FooterMainContent />
      <hr className="bg-white opacity-20" />
      {/* Rights */}
      <FooterRights />
    </footer>
  );
};
