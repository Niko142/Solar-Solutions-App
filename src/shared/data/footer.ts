import type { ContactDataProps } from "../types/navigation.types";

export const contactData: ContactDataProps[] = [
  {
    icon: "/icons/phone.svg",
    alt: "Phone number",
    content: "0123456789",
    href: "tel:0123456789",
  },
  {
    icon: "/icons/mail.svg",
    alt: "Mail",
    content: "companyname@gmail.com",
    href: "mailto:companyname@gmail.com",
  },
  {
    icon: "/icons/facebook.svg",
    alt: "Facebook",
    href: "https://facebook.com",
  },
  { icon: "/icons/twitter.svg", alt: "Twitter", href: "https://x.com" },
  {
    icon: "/icons/instagram.svg",
    alt: "Instagram",
    href: "https://instagram.com",
  },
];
