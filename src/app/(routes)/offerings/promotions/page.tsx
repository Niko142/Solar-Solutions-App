import { PageLayout } from "@/components/layout";
import { PageHeader } from "@/components/ui";
import { ReturnButton } from "@/components/ui/Button";
import { promotionsItems } from "./_data/promotions.data";
import { PromoCard } from "./_components/PromoCard";

export default function DealsPromotions() {
  return (
    <PageLayout bg="bg-red-50/50">
      <PageHeader
        title="Deals & promotions"
        description="Exclusive offers just for you"
      />

      <div className="mb-4 space-y-4 sm:mb-6 md:mb-8 md:space-y-6">
        {promotionsItems.map((card) => (
          <PromoCard key={card.id} promotion={card} />
        ))}
      </div>

      <ReturnButton path={"/#services"} variant="red" />
    </PageLayout>
  );
}
