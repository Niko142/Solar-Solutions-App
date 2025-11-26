import { PageLayout } from "@/components/layout";
import { PageHeader } from "@/components/ui";
import { ReturnButton } from "@/components/ui/Button";
import { ContactInfo } from "./_components/ContactInfo";
import { SupportList } from "./_components/SupportList";
import { supportOpportunities } from "./_data/support.data";

export default function ConsultationSupport() {
  return (
    <PageLayout bg="bg-green-100/30">
      <PageHeader
        title="Consultation & support"
        description=" We're here to help you every step of the way"
      />

      <div className="mb-4 rounded-xl bg-white px-4 py-7 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          <SupportList
            title="Get Expert Advice"
            opportunities={supportOpportunities}
          />
          <ContactInfo />
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
