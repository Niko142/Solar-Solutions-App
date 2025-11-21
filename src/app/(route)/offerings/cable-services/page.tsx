import { Phone, Tv, Zap } from "lucide-react";
import { ReturnButton } from "@/components/ui";
import { PageHeader, PageLayout } from "@/components/layout";

export default function CableServices() {
  return (
    <PageLayout bg="bg-purple-50/50">
      <PageHeader
        title="Cable services"
        description="Harness the power of the sun for a sustainable future"
      />

      <div className="mb-4 rounded-2xl bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <div className="mb-4 grid gap-6 sm:mb-8 md:grid-cols-3">
          <article className="flex flex-col items-center gap-2 rounded-xl bg-blue-50 p-4 text-center sm:p-6">
            <span className="inline-flex rounded-full bg-yellow-400 p-2">
              <Zap size={40} className="h-6 w-6 text-white md:h-10 md:w-10" />
            </span>
            <h2
              style={{ fontSize: "initial" }}
              className="font-poppins font-semibold"
            >
              High-Speed Internet
            </h2>
            <p className="text-gray-600">Up to 1 Gbps speeds</p>
          </article>

          <article className="flex flex-col items-center gap-2 rounded-xl bg-purple-50 p-4 text-center sm:p-6">
            <span className="inline-flex rounded-full bg-gray-200 p-2">
              <Tv size={40} className="h-6 w-6 md:h-10 md:w-10" />
            </span>
            <h2
              style={{ fontSize: "initial" }}
              className="font-poppins font-semibold"
            >
              TV Packages
            </h2>
            <p className="text-gray-600">200+ channels</p>
          </article>

          <article className="flex flex-col items-center gap-2 rounded-xl bg-green-50 p-4 text-center sm:p-6">
            <span className="bg-red inline-flex rounded-full p-2">
              <Phone size={40} className="h-6 w-6 text-white md:h-10 md:w-10" />
            </span>
            <h2
              style={{ fontSize: "initial" }}
              className="font-poppins text-lg font-semibold"
            >
              Phone Services
            </h2>
            <p className="text-gray-600">Unlimited calling</p>
          </article>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 sm:p-6">
          <h3 className="font-poppins mb-2 text-xl font-semibold sm:mb-4">
            Available Packages
          </h3>
          <ul className="space-y-2 md:space-y-3">
            <li className="flex flex-col items-center justify-between rounded-lg bg-white p-2 sm:flex-row sm:p-4">
              <p>Basic Internet + TV</p>
              <p className="">
                <span className="text-red font-bold">$59.99</span> /{" "}
                <b>Month</b>
              </p>
            </li>
            <li className="flex flex-col items-center justify-between rounded-lg bg-white p-2 sm:flex-row sm:p-4">
              <p>Premium Bundle</p>
              <p className="">
                <span className="text-red font-bold">$89.99</span> /{" "}
                <b>Month</b>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <ReturnButton
        path={"/#services"}
        color="bg-violet-600"
        hover="hover:bg-violet-800"
        focusVisible="focus-visible:bg-violet-800"
      />
    </PageLayout>
  );
}
