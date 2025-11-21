import type { LinkProps } from "next/link";

export interface NavigationItemsProps {
  title: string;
  href: LinkProps["href"];
}

export interface HeaderBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface HeaderMobileNavProps {
  items: NavigationItemsProps[];
  onClose: () => void;
  ref?: React.Ref<HTMLElement> | undefined;
}
