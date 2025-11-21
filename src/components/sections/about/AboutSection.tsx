import { LayoutContainer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { AboutImage } from "./AboutImage";

export const AboutSection = () => {
  const aboutDescription: string = `
    Welcome to our sales and marketing company, where we specialize in
    helping customers snag great deals from the leading solar and
    cable companies in the DC, Maryland, and Virginia area.We
    understand that finding the right solar and cable solutions for
    your needs can be a daunting task, which is why we&apos;re here to
    make the process easier and more affordable for you.
  `.trim();

  return (
    <section
      className="bg-red py-7 sm:py-10 md:pt-[45px] md:pb-[69px]"
      id="about"
    >
      <LayoutContainer>
        <div className="relative flex flex-col-reverse justify-between gap-x-[67px] px-6 sm:px-11 md:px-15 lg:flex-row lg:px-20 xl:gap-7.5 xl:px-37.5">
          {/* Main Content */}
          <div className="flex max-w-full flex-col pt-5 sm:max-w-133 lg:pt-11.5">
            <h2 className="mb-5 leading-tight text-white capitalize md:mb-1.5 md:leading-[85px]">
              Who we are
            </h2>
            <p className="font-poppins mb-7.5 text-sm/normal font-normal text-balance text-white sm:text-base/snug md:text-lg/7.5">
              {aboutDescription}
            </p>

            {/* Menu of btn */}
            <menu className="font-poppins flex flex-col gap-3 text-lg/7.5 font-medium sm:flex-row md:gap-8">
              <li>
                <Button>Read more</Button>
              </li>
              <li>
                <Button variant="black">Contact us today</Button>
              </li>
            </menu>
          </div>

          {/* Visual image */}
          <AboutImage />
        </div>
      </LayoutContainer>
    </section>
  );
};
