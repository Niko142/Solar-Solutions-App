import type { BaseLink, ContactType, SocialType } from "./common.types";

export interface ContactItem extends BaseLink {
  type: ContactType;
  content: string;
}

export interface SocialLink extends BaseLink {
  type: SocialType;
  content?: never;
}
