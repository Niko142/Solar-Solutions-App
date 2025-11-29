import { LayoutContainer } from "@/components/layout";
import {
  FooterContacts,
  FooterAbout,
  FooterLinks,
  FooterServices,
} from "./footer-content";

export const FooterMain = () => {
  return (
    <LayoutContainer>
      <section className="px-6 sm:px-11 md:px-15 lg:px-20 xl:px-37.5">
        <div className="grid min-h-106.5 grid-cols-1 gap-4 pt-[25px] pb-[17px] sm:gap-6.5 md:grid-cols-[336px_1fr_1fr] md:gap-8 lg:grid-cols-[336px_1fr_1fr_1fr]">
          <FooterAbout />
          <FooterLinks />
          <FooterServices />
          <FooterContacts />
        </div>
      </section>
    </LayoutContainer>
  );
};
