import {
  ChartBar,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Wrench,
} from "lucide-react";
import { ReturnButton } from "@/components/ui";
import { PageHeader, PageLayout } from "@/components/layout";

export default function ConsultationSupport() {
  return (
    <PageLayout bg="bg-green-100/30">
      <PageHeader
        title="Consultation & support"
        description=" We're here to help you every step of the way"
      />

      <div className="mb-4 rounded-xl bg-white px-4 py-7 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          <div>
            <h2 className="service font-poppins mb-4 leading-tight font-semibold">
              Get Expert Advice
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="rounded-lg bg-green-100 p-3">
                  <MessageCircle size={28} className="text-green-700" />
                </span>
                <div>
                  <h3 className="mb-1 text-lg/tight font-semibold">
                    Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    30-minute free session to understand your needs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="rounded-lg bg-blue-100 p-3">
                  <ChartBar size={28} className="text-blue-700" />
                </span>
                <div>
                  <h3 className="mb-1 text-lg/tight font-semibold">
                    Custom Solutions
                  </h3>
                  <p className="text-gray-600">
                    Tailored recommendations for your specific situation
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="rounded-lg bg-purple-100 p-3">
                  <Wrench size={28} className="text-purple-700" />
                </span>
                <div>
                  <h3 className="mb-1 text-lg/tight font-semibold">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600">
                    24/7 customer support and maintenance
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-semibold">Contact Our Experts</h3>
            <ul className="font-poppins space-y-4 font-medium">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone />
                <span>123456789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail />
                <span>support@company.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Clock />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ReturnButton
        path={"/#services"}
        color="bg-green-600"
        hover="hover:bg-green-700"
        focusVisible="focus-visible:bg-green-700"
      />
    </PageLayout>
  );
}
