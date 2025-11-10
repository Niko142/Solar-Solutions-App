import { motion } from "framer-motion";
import Link from "next/link";
import { navItemsVariants, navMobileVariants } from "@/shared/animations";
import type { HeaderMobileNavProps } from "@/shared/types/navigation.types";

export const HeaderMobileNav = ({
  items,
  onClose,
  ref,
}: HeaderMobileNavProps) => (
  <motion.nav
    ref={ref}
    variants={navMobileVariants}
    initial="close"
    animate="open"
    exit="close"
    transition={{ duration: 0.4 }}
    className="absolute top-0 right-0 z-20 bg-black px-3 pt-25 pb-2 text-white sm:px-6 sm:pt-27 sm:pb-5 md:pt-30 lg:hidden"
  >
    <ul className="flex flex-col gap-3 sm:gap-4">
      {items.map((item, ind) => (
        <motion.li
          key={ind}
          variants={navItemsVariants}
          initial="close"
          animate="open"
          exit="close"
          transition={{ delay: 0.05 * ind }}
          className="block p-1.5 text-sm font-medium tracking-wide uppercase transition-colors hover:text-red-500 sm:text-base"
        >
          <Link href={item.href} onClick={onClose}>
            {item.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.nav>
);
