export interface Slug {
  _type: string;
  current: string;
}

export interface DocumentWithSlug {
  slug: Slug;
  _updatedAt: string;
}

export type InternationalizedString = InternationalizedStringValue[];

export interface InternationalizedStringValue {
  _key: string;
  value?: string;
}
