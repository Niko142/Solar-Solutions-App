import { Sun } from "lucide-react";
import { ReturnButton } from "@/components/ui";
import { PageHeader, PageLayout } from "@/components/layout";

export default function SolarSolutions() {
  return (
    <PageLayout bg="bg-blue-100/30">
      <PageHeader
        title="Solar solutions"
        description="Harness the power of the sun for a sustainable future"
      />

      <div className="mb-4 rounded-xl bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <div className="grid items-center gap-4 sm:gap-8 md:grid-cols-2">
          <div>
            <h2 className="service font-poppins mb-4 leading-tight font-semibold">
              Why Choose Solar?
            </h2>
            <ul className="list-inside list-disc space-y-1 text-base/normal text-gray-600 marker:text-xl marker:text-yellow-400 md:space-y-3">
              <li>Reduce electricity bills by up to 90%</li>
              <li>Environmentally friendly energy source</li>
              <li>Government incentives and tax credits</li>
              <li>Increase your property value</li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-yellow-200 p-4 text-center sm:gap-4 sm:p-6">
            <Sun size={40} className="text-yellow-600" />
            <b className="text-lg/normal text-gray-700">
              Clean, Renewable Energy
            </b>
          </div>
        </div>
      </div>

      <ReturnButton
        path={"/#services"}
        color="bg-blue-600"
        hover="hover:bg-blue-700"
        focusVisible="focus-visible:bg-blue-700"
      />
    </PageLayout>
  );
}
