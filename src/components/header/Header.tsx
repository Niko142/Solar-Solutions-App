"use client";

import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { navigationItems } from "@/constants/data";
import { useClickOutside } from "@/hooks/useClickOutside";
import { HeaderBurger } from "./HeaderBurger";
import { HeaderMobileNav } from "./HeaderMobileNav";
import { HeaderNav } from "./HeaderNav";
import { Logo } from "../ui";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Инициализируем логику закрытия Mobile Navbar при клике вне нужного поля
  useClickOutside(navbarRef, () => setIsOpen(false));

  return (
    <header className="fixed top-0 right-0 left-0 z-20 w-full bg-black py-5 sm:py-6 md:py-7.5">
      <div className="flex items-center justify-between px-8 sm:px-10 md:px-13 xl:ps-21.5 xl:pe-20">
        <Logo priority />

        {/* BurgerMenu */}
        <HeaderBurger
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {/* Desktop Navbar  */}
        <HeaderNav items={navigationItems} />

        {/* Mobile Navbar */}
        <AnimatePresence>
          {isOpen && (
            <HeaderMobileNav
              ref={navbarRef}
              onClose={() => setIsOpen(false)}
              items={navigationItems}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
