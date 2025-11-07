export interface NavigationItemsProps {
  title: string;
  href: string;
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
