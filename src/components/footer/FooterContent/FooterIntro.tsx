import Image from "next/image";

export const FooterIntro = () => {
  return (
    <article className="border-b border-white/20 pb-3.5 md:border-r md:border-b-0 md:pe-10 md:pt-19 md:pb-0">
      {/* Logo */}
      <div className="relative mb-4 aspect-148/63 w-[100px] sm:w-[120px] md:mb-7.5 md:w-[148px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          priority
          className="mb-4 object-contain md:mb-7.5"
          sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 148px"
        />
      </div>
      <p className="text-justify text-base/[27px] font-light sm:text-left">
        Contact us today to explore our services and take advantage of the great
        deals available from the leading solar and cable companies in the DC,
        Maryland, and Virginia area. Let us be your trusted partner in finding
        the best solutions for your energy and connectivity needs.
      </p>
    </article>
  );
};
