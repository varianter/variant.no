import { InternationalizedString } from "./global";

export interface Navigation {
  _id: string;
  main: ILink[];
  sidebar?: ILink[];
  footer?: FooterSection[];
}

interface Reference {
  _ref: string;
}

export interface ILink {
  _key: string;
  _type: string;
  linkTitle: string | InternationalizedString;
  linkType: LinkType;
  internalLink?: Reference;
  url?: string;
  email?: string;
  phone?: string;
  anchor?: string;
  newTab?: boolean;
  ariaLabel?: string;
  language?: string;
}

export enum LinkType {
  Internal = "internal",
  External = "external",
  Email = "email",
  Phone = "phone",
}

export interface FooterSection {
  _key: string;
  _type: string;
  sectionTitle: string;
  sectionType: SectionType;
  linksAndContent?: ILink[];
  socialMediaLinks?: Reference;
}

export enum SectionType {
  Content = "content",
  SocialMedia = "socialMedia",
}
