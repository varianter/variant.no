import { PortableTextBlock } from "sanity";

import { Slug } from "./global";

export interface LegalDocument {
  _key: string;
  _type: string;
  basicTitle: string;
  slug: Slug;
  richText: PortableTextBlock[];
}
