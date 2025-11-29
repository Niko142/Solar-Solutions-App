import { IconBadge } from "@/components/ui/Badge/IconBadge";
import type { SupportListProps } from "../_types/support.types";

export const SupportList = ({ title, opportunities }: SupportListProps) => {
  return (
    <div>
      <h2 className="service mb-4 leading-tight font-semibold">{title}</h2>
      <ul className="space-y-4">
        {opportunities.map((item, ind) => (
          <li key={ind} className="flex items-start gap-4">
            <IconBadge size="md" icon={item.icon} variant={item.variant} />
            <div>
              <h3 className="mb-1 text-lg/tight font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
