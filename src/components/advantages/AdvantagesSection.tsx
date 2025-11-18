import { LayoutContainer } from "@/shared/components";
import { advantagesItems } from "@/shared/data/advantages";
import { AdvantageCard } from "./AdvantageCard";

export const AdvantagesSection = () => {
  return (
    <section
      className="bg-gray-50 py-10 sm:py-12 md:py-17 lg:py-27.5"
      id="initiatives"
    >
      <LayoutContainer>
        <div
          className="grid grid-cols-1 gap-5 px-6 sm:px-11 md:grid-cols-2 md:px-15 lg:grid-cols-3 lg:px-20 xl:gap-7.5 xl:px-37.5"
          id="initiatives"
        >
          {/* Notation */}
          <div className="pt-0 md:pt-5 lg:pt-10">
            <h2 className="font-poppins text-dark mb-[13px] ml-0.5 leading-tight md:leading-snug xl:leading-[67px]">
              Why Choose Us?
            </h2>
            <p className="font-roboto max-w-full text-start text-base/tight font-normal text-gray-700 sm:text-lg/5.5 sm:text-balance md:max-w-80">
              Whether you&apos;re looking to switch to solar energy or upgrade
              your cable services, our sales and marketing company is here to
              help.
            </p>
          </div>

          {/* Card List */}
          {advantagesItems.map((item, ind) => (
            <AdvantageCard key={ind} {...item} />
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};
