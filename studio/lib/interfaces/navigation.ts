export interface Navigation {
  _id: string;
  main: ILink[];
  sidebar?: ILink[];
  footer?: FooterObject[];
}

interface Reference {
  _ref: string;
}

export interface ILink {
  _key: string;
  _type: string;
  linkTitle: string;
  linkType: LinkType;
  internalLink?: Reference;
  url?: string;
  email?: string;
  phone?: string;
  anchor?: string;
  newTab?: boolean;
  ariaLabel?: string;
}

export enum LinkType {
  Internal = "internal",
  External = "external",
  Email = "email",
  Phone = "phone",
}

export interface FooterObject {
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
