import Image from "next/image";
import { OfferingCard } from "./OfferingCard";
import type { OfferingListProps } from "@/types/offerings.types";

export const OfferingList = ({ items }: OfferingListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-8.5 lg:gap-y-7.5">
      {items.map((item) => (
        <OfferingCard key={item.id} card={item} />
      ))}
      <Image
        src="/present-panel.webp"
        alt="Presentation panels"
        width={352}
        height={446}
        id="image"
        className="col-start-2 row-start-1 row-end-3 mt-[37px] hidden lg:block"
      />
    </div>
  );
};
