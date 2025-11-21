import { ReturnButton } from "@/components/ui";
import { PageHeader, PageLayout } from "@/components/layout";

export default function DealsPromotions() {
  return (
    <PageLayout bg="bg-red-50/50">
      <PageHeader
        title="Deals & promotions"
        description="Exclusive offers just for you"
      />

      <div className="mb-4 space-y-4 sm:mb-6 md:mb-8 md:space-y-6">
        <article className="flex flex-col gap-3 rounded-xl border-l-4 border-red-500 bg-white p-4 shadow-lg sm:rounded-2xl sm:p-5 md:p-6">
          <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-0">
            <h2 className="deals font-poppins text-xl font-bold text-gray-800">
              Solar Installation Special
            </h2>
            <aside className="font-poppins rounded-full bg-red-600 px-3 text-sm font-semibold text-white sm:py-1">
              Limited Time
            </aside>
          </div>
          <p className="text-base text-gray-600">
            Get 30% off on complete solar panel installation. Includes free
            consultation and maintenance for first year.
          </p>
          <p className="font-poppins text-2xl font-semibold text-gray-600">
            Save <span className="text-red">$3,000+</span>
          </p>
        </article>

        <article className="flex flex-col gap-3 rounded-xl border-l-4 border-blue-500 bg-white p-4 shadow-lg sm:rounded-2xl sm:p-5 md:p-6">
          <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-0">
            <h2 className="deals font-poppins text-xl font-bold text-gray-800">
              Cable Bundle Offer
            </h2>
            <aside className="font-poppins rounded-full bg-blue-600 px-3 text-sm font-semibold text-white sm:py-1">
              Popular
            </aside>
          </div>
          <p className="text-base text-gray-600">
            Internet + TV + Phone bundle at 50% off for first 6 months. No
            installation fees.
          </p>
          <p className="font-poppins text-2xl font-semibold text-gray-600">
            <span className="text-blue-500">50%</span> OFF
          </p>
        </article>

        <article className="flex flex-col gap-3 rounded-xl border-l-4 border-green-500 bg-white p-4 shadow-lg sm:rounded-2xl sm:p-5 md:p-6">
          <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-0">
            <h2 className="deals font-poppins text-xl font-bold">
              Referral Program
            </h2>
            <aside className="font-poppins rounded-full bg-green-700 px-3 text-sm font-semibold text-white sm:py-1">
              Always Available
            </aside>
          </div>
          <p className="text-base text-gray-600">
            Refer a friend and both get $100 credit on your next service.
          </p>
          <p className="font-poppins text-2xl font-semibold text-gray-600">
            <span className="text-green-600">$100</span> Credit
          </p>
        </article>
      </div>

      <ReturnButton
        path={"/#services"}
        color="bg-red-600"
        hover="hover:bg-red-700"
        focusVisible="focus-visible:bg-red-700"
      />
    </PageLayout>
  );
}
