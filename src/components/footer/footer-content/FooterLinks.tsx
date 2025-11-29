import Link from "next/link";
import { navigationItems } from "@/constants/data";

export const FooterLinks = () => {
  return (
    <article className="flex flex-col items-center gap-2 border-b border-white/20 px-1.5 pb-3.5 md:items-start md:border-r md:border-b-0 md:pt-30 md:pb-0">
      <h5 className="text-base/[35px] font-normal capitalize">Quick links</h5>
      <nav>
        <ul className="flex flex-col items-center gap-2 text-base/relaxed font-light md:items-start xl:text-base/[35px]">
          {navigationItems.map((item, ind) => (
            <li key={ind}>
              <Link
                href={item.href}
                className="hover:text-red transition-colors duration-300 ease-in-out"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
};
