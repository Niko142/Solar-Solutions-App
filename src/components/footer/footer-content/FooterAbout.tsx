import { Logo } from "@/components/ui";

export const FooterAbout = () => {
  return (
    <article className="border-b border-white/20 pb-3.5 md:border-r md:border-b-0 md:pe-10 md:pt-19 md:pb-0">
      <Logo containerClassName="mb-4 md:mb-7.5" />
      <p className="text-justify text-base/[27px] font-light sm:text-left">
        Contact us today to explore our services and take advantage of the great
        deals available from the leading solar and cable companies in the DC,
        Maryland, and Virginia area. Let us be your trusted partner in finding
        the best solutions for your energy and connectivity needs.
      </p>
    </article>
  );
};
