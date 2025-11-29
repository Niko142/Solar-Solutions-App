import type { ContactItem, SocialLink } from "@/types/contact.types";

export const contactInfo: ContactItem[] = [
  {
    type: "phone",
    icon: "/icons/phone.svg",
    alt: "Phone number",
    content: "0123456789",
    href: "tel:0123456789",
  },
  {
    type: "email",
    icon: "/icons/mail.svg",
    alt: "Email",
    content: "companyname@gmail.com",
    href: "mailto:companyname@gmail.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    type: "facebook",
    icon: "/icons/facebook.svg",
    alt: "Facebook page",
    href: "https://facebook.com",
  },
  {
    type: "twitter",
    icon: "/icons/twitter.svg",
    alt: "Twitter profile",
    href: "https://x.com",
  },
  {
    type: "instagram",
    icon: "/icons/instagram.svg",
    alt: "Instagram account",
    href: "https://instagram.com",
  },
];
