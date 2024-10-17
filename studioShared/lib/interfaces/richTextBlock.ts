import { PortableTextBlock } from "sanity";

export interface RichTextBlock {
  _key: string;
  _type: "richTextBlock";
  richText: PortableTextBlock[];
}
