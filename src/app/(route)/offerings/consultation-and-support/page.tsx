import { ArrowLeft, ChartBar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ConsultationSupport() {
  return (
    <main className="font-roboto min-h-screen bg-green-100/30 py-8 md:py-12">
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">
        <div className="font-poppins mb-4 flex flex-col items-center gap-2 sm:mb-6 md:mb-8 md:gap-4">
          <h1 className="leading-tight">Consultation & Support</h1>
          <p className="text-xl text-gray-600">
            We&apos;re here to help you every step of the way
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Get Expert Advice
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-green-100 p-3">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Free Consultation</h3>
                    <p className="text-gray-600">
                      30-minute free session to understand your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-blue-100 p-3">
                    <ChartBar size={28} />
                    {/* <span className="text-2xl">📊</span> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Custom Solutions</h3>
                    <p className="text-gray-600">
                      Tailored recommendations for your specific situation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-purple-100 p-3">
                    {/* <Hamm */}
                    {/* <span className="text-2xl">🛠️</span> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ongoing Support</h3>
                    <p className="text-gray-600">
                      24/7 customer support and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Contact Our Experts
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <span className="mr-3">📞</span>
                  <span>1-800-HELP-NOW</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-3">✉️</span>
                  <span>support@company.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-3">🕒</span>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/#services"
          className="font-poppins inline-flex items-center gap-2 rounded-lg bg-green-400 px-6 py-3 font-medium text-black shadow-md outline-0 transition-colors hover:bg-green-500 focus-visible:bg-green-500"
        >
          <ArrowLeft size={24} /> Return
        </Link>
      </div>
    </main>
  );
}
