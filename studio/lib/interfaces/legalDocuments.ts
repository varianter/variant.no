import { PortableTextBlock } from "src/components/richText/RichText";

import { Slug } from "./global";

export interface LegalDocument {
  _key: string;
  _type: string;
  basicTitle: string;
  slug: Slug;
  richText: PortableTextBlock[];
}
