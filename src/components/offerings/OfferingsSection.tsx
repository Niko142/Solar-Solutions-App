import { LayoutContainer } from "@/shared/components";
import { offeringItems } from "@/shared/data/offerings";
import { OfferingList } from "./OfferingList";

export const OfferingsSection = () => {
  return (
    <section className="py-10 md:pt-17.5 md:pb-12.5 lg:pt-24 lg:pb-[101px]">
      <LayoutContainer>
        <div className="px-6 sm:px-11 md:px-15 lg:px-20 xl:px-37.5">
          {/* Header block */}
          <div className="font-poppins mb-4 flex flex-col gap-2.5 text-center sm:mb-5 md:mb-[31px]">
            <h4 className="text-red text-lg/tight capitalize sm:text-xl/tight">
              Our services
            </h4>
            <h2 className="text-dark leading-tight capitalize sm:leading-normal md:leading-[67px]">
              What we do
            </h2>
          </div>
          {/* Main List */}
          <OfferingList items={offeringItems} />
        </div>
      </LayoutContainer>
    </section>
  );
};
