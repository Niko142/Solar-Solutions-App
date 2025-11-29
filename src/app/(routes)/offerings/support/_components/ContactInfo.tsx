import { contactInfo } from "@/constants/data";
import { iconMap } from "@/types/contact.types";
import { Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="rounded-xl bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-semibold">Contact Our Experts</h3>
      <ul className="font-poppins space-y-4 font-medium">
        {contactInfo.map((item) => {
          const Icon = iconMap[item.type as keyof typeof iconMap];
          return (
            <li
              key={item.type}
              className="flex items-center gap-3 text-gray-600"
            >
              {Icon && <Icon />}
              <span>{item.content}</span>
            </li>
          );
        })}
        <li className="flex items-center gap-3 text-gray-600">
          <Clock />
          <span>Available 24/7</span>
        </li>
      </ul>
    </div>
  );
};
