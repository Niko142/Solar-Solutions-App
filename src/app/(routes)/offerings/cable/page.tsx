import { PageLayout } from "@/components/layout";
import { PageHeader } from "@/components/ui";
import { ReturnButton } from "@/components/ui/Button";
import { cableFeatures, cablePackages } from "./_data/cable.data";
import { CableFeaturesList } from "./_components/CableFeaturesList";
import { CablePackagesList } from "./_components/CablePackagesList";

export default function CableServices() {
  return (
    <PageLayout bg="bg-purple-50/50">
      <PageHeader
        title="Cable services"
        description="Harness the power of the sun for a sustainable future"
      />

      <div className="mb-4 rounded-2xl bg-white p-4 shadow-lg sm:mb-6 sm:p-8 md:mb-8">
        <CableFeaturesList features={cableFeatures} />
        <CablePackagesList packages={cablePackages} />
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
