import { Mail, Phone } from "lucide-react";
import type { BaseLink, ContactType, SocialType } from "./common.types";

// Преобразуем тип контактной информацию в необходимую иконку
export const iconMap = {
  phone: Phone,
  email: Mail,
} as const;

export interface ContactItem extends BaseLink {
  type: ContactType;
  content: string;
}

export interface SocialLink extends BaseLink {
  type: SocialType;
  content?: never;
}
