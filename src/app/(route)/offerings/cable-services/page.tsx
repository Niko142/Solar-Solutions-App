import { ArrowLeft, Phone, Tv, Zap } from "lucide-react";
import Link from "next/link";

export default function CableServices() {
  return (
    <main className="font-roboto min-h-screen bg-purple-50/50 py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">
        <div className="font-poppins mb-4 flex flex-col items-center gap-2 sm:mb-6 md:mb-8 md:gap-4">
          <h1 className="leading-tight">Cable Services</h1>
          <p className="text-center text-lg/tight text-gray-600 md:text-xl/normal">
            Harness the power of the sun for a sustainable future
          </p>
        </div>

        <div className="mb-4 rounded-2xl bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
          <div className="mb-4 grid gap-6 sm:mb-8 md:grid-cols-3">
            <article className="flex flex-col items-center gap-2 rounded-xl bg-blue-50 p-4 text-center sm:p-6">
              <span className="inline-flex rounded-full bg-yellow-400 p-2">
                <Zap size={40} className="h-6 w-6 text-white md:h-10 md:w-10" />
              </span>
              <h3 className="text-lg font-semibold">High-Speed Internet</h3>
              <p className="text-gray-600">Up to 1 Gbps speeds</p>
            </article>

            <article className="flex flex-col items-center gap-2 rounded-xl bg-purple-50 p-4 text-center sm:p-6">
              <span className="inline-flex rounded-full bg-gray-200 p-2">
                <Tv size={40} className="h-6 w-6 md:h-10 md:w-10" />
              </span>
              <h3 className="text-lg font-semibold">TV Packages</h3>
              <p className="text-gray-600">200+ channels</p>
            </article>

            <article className="flex flex-col items-center gap-2 rounded-xl bg-green-50 p-4 text-center sm:p-6">
              <span className="bg-red inline-flex rounded-full p-2">
                <Phone
                  size={40}
                  className="h-6 w-6 text-white md:h-10 md:w-10"
                />
              </span>
              <h3 className="text-lg font-semibold">Phone Services</h3>
              <p className="text-gray-600">Unlimited calling</p>
            </article>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 sm:p-6">
            <h3 className="mb-2 text-xl font-semibold sm:mb-4">
              Available Packages
            </h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex flex-col items-center justify-between rounded-lg bg-white p-2 sm:flex-row sm:p-4">
                <p>Basic Internet + TV</p>
                <p className="">
                  <span className="text-red font-bold">$59.99</span> /{" "}
                  <b>Month</b>
                </p>
              </div>
              <div className="flex flex-col items-center justify-between rounded-lg bg-white p-2 sm:flex-row sm:p-4">
                <p>Premium Bundle</p>
                <p className="">
                  <span className="text-red font-bold">$89.99</span> /{" "}
                  <b>Month</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/#services"
          className="font-poppins inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-medium text-white shadow-md outline-0 transition-colors hover:bg-violet-600 focus-visible:bg-violet-600"
        >
          <ArrowLeft size={24} /> Return
        </Link>
      </div>
    </main>
  );
}
