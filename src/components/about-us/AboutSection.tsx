import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="bg-red py-7 sm:py-10 md:pt-[45px] md:pb-[69px]">
      <div className="relative flex flex-col-reverse justify-between gap-x-[67px] px-6 sm:px-11 md:px-15 lg:flex-row lg:px-20 xl:gap-7.5 xl:px-37.5">
        {/* Content Block */}
        <div className="flex max-w-full flex-col pt-5 sm:max-w-133 lg:pt-11.5">
          <h2 className="font-poppins mb-5 leading-tight text-white capitalize md:mb-1.5 md:leading-[85px]">
            Who we are
          </h2>
          <p className="font-poppins mb-7.5 text-sm/normal font-normal text-balance text-white sm:text-base/snug md:text-lg/7.5">
            Welcome to our sales and marketing company, where we specialize in
            helping customers snag great deals from the leading solar and cable
            companies in the DC, Maryland, and Virginia area.We understand that
            finding the right solar and cable solutions for your needs can be a
            daunting task, which is why we&apos;re here to make the process
            easier and more affordable for you.
          </p>
          <menu className="font-poppins flex flex-col gap-3 text-lg/7.5 font-medium sm:flex-row md:gap-8">
            <li>
              <button className="rounded-5xl cursor-pointer bg-white px-7.5 py-2.5 text-left text-black capitalize transition-colors duration-400 ease-in-out hover:bg-gray-200">
                Read more
              </button>
            </li>
            <li>
              <button className="rounded-5xl cursor-pointer bg-black px-7.5 py-2.5 text-white capitalize transition-colors duration-400 ease-in-out hover:bg-gray-900">
                Contact us today
              </button>
            </li>
          </menu>
        </div>

        {/* Visual image */}
        <div className="flex justify-center">
          <Image
            src="/solar-leads.svg"
            width={538}
            height={457}
            className="aspect-538/457 w-auto lg:min-w-90"
            alt="Company team"
          />
        </div>
      </div>
    </section>
  );
};
