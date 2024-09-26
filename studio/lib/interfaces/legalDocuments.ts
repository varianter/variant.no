import { PortableTextBlock } from "sanity";

import { Slug } from "./global";

export interface LegalDocument {
  _id: string;
  _type: string;
  slug: Slug;
  basicTitle: string;
  richText: PortableTextBlock[];
  _translations: Translations[];
}

interface Translations {
  basicTitle: string;
  language: string;
  richText: PortableTextBlock[];
  slug: Slug;
}
