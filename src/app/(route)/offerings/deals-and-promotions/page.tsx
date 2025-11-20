import Link from "next/link";

export default function DealsPromotions() {
  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Deals & Promotions
          </h1>
          <p className="text-xl text-gray-600">Exclusive offers just for you</p>
        </div>

        <div className="mb-8 space-y-6">
          <div className="rounded-2xl border-l-4 border-red-500 bg-white p-6 shadow-lg">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-800">
                Solar Installation Special
              </h3>
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm text-white">
                Limited Time
              </span>
            </div>
            <p className="mb-4 text-gray-600">
              Get 30% off on complete solar panel installation. Includes free
              consultation and maintenance for first year.
            </p>
            <div className="text-2xl font-bold text-red-500">Save $3,000+</div>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-lg">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-800">
                Cable Bundle Offer
              </h3>
              <span className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                Popular
              </span>
            </div>
            <p className="mb-4 text-gray-600">
              Internet + TV + Phone bundle at 50% off for first 6 months. No
              installation fees.
            </p>
            <div className="text-2xl font-bold text-blue-500">50% OFF</div>
          </div>

          <div className="rounded-2xl border-l-4 border-green-500 bg-white p-6 shadow-lg">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-800">
                Referral Program
              </h3>
              <span className="rounded-full bg-green-500 px-3 py-1 text-sm text-white">
                Always Available
              </span>
            </div>
            <p className="mb-4 text-gray-600">
              Refer a friend and both get $100 credit on your next service.
            </p>
            <div className="text-2xl font-bold text-green-500">$100 Credit</div>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 text-white transition-colors hover:bg-red-600"
        >
          ← Back to Services
        </Link>
      </div>
    </main>
  );
}
