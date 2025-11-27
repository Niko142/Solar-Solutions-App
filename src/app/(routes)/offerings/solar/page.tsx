import { PageLayout } from "@/components/layout";
import { PageHeader } from "@/components/ui";
import { ReturnButton } from "@/components/ui/Button";
import { SolarBadge } from "./_components/SolarBadge";
import { SolarBenefitsList } from "./_components/SolarBenefitsList";
import { solarBenefits } from "./_data/solar.data";

export default function SolarSolutions() {
  return (
    <PageLayout bg="bg-blue-100/30">
      <PageHeader
        title="Solar solutions"
        description="Harness the power of the sun for a sustainable future"
      />

      <div className="mb-4 rounded-xl bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <div className="grid items-center gap-4 sm:gap-8 md:grid-cols-2">
          <SolarBenefitsList
            title="Why choose solar?"
            benefits={solarBenefits}
          />
          {/* Visual image */}
          <SolarBadge />
        </div>
      </div>

      <ReturnButton path={"/#services"} variant="blue" />
    </PageLayout>
  );
}
