import { motion } from "framer-motion";
import Link from "next/link";
import type { NavigationItemsProps } from "@/types/navigation.types";

export const HeaderNav = ({ items }: { items: NavigationItemsProps[] }) => {
  return (
    <motion.nav className="hidden lg:block">
      <ul className="box-border flex gap-x-9 xl:gap-x-[47px]">
        {items.map((item, ind) => (
          <li
            key={ind}
            className="font-poppins cursor-pointer text-base/6 font-medium text-white uppercase transition-colors duration-200 hover:text-red-500 xl:text-lg/[27px]"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
