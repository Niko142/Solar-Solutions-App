"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { navigationItems } from "@/shared/data/navigation";
import { HeaderBurger } from "./HeaderBurger";
import { HeaderMobileNav } from "./HeaderMobileNav";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Инициализируем логику закрытия Mobile Navbar при клике вне нужного поля
  useClickOutside(navbarRef, () => setIsOpen(false));

  return (
    <header className="fixed top-0 right-0 left-0 z-20 w-full bg-black py-5 sm:py-6 md:py-7.5">
      <div className="flex items-center justify-between px-8 sm:px-10 md:px-13 xl:ps-21.5 xl:pe-20">
        {/* Logo */}
        <div className="relative aspect-148/63 w-[100px] sm:w-[120px] md:w-[148px]">
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 148px"
          />
        </div>

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
