import Link from "next/link";
import { offeringItems } from "@/constants/data";

export const FooterServices = () => {
  return (
    <article className="flex flex-col items-center gap-2 border-b border-white/20 px-1.5 pb-3.5 md:items-start md:border-b-0 md:pt-30 md:pb-0 lg:border-r">
      <h5 className="text-base/[35px] font-normal capitalize">Services</h5>
      <ul className="flex flex-col items-center gap-2 text-base/relaxed font-light md:items-start xl:text-base/[35px]">
        {offeringItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="hover:text-red transition-colors duration-300 ease-in-out"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
