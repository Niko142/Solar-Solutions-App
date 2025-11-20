import { ArrowLeft, Sun } from "lucide-react";
import Link from "next/link";

export default function SolarSolutions() {
  return (
    <main className="font-roboto min-h-screen bg-yellow-100/10 py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">
        <div className="font-poppins mb-4 flex flex-col items-center gap-2 sm:mb-6 md:mb-8 md:gap-4">
          <h1 className="leading-tight">Solar Solutions</h1>
          <p className="text-center text-lg/tight text-gray-600 md:text-xl/normal">
            Harness the power of the sun for a sustainable future
          </p>
        </div>

        <div className="mb-4 rounded-2xl border border-black/10 bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
          <div className="grid items-center gap-4 sm:gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-poppins mb-4 leading-tight font-semibold">
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

        <Link
          href="/#services"
          className="font-poppins inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white shadow-md outline-0 transition-colors hover:bg-blue-600 focus-visible:bg-blue-600"
        >
          <ArrowLeft size={24} /> Return
        </Link>
      </div>
    </main>
  );
}
