import { PortableTextBlock, Slug } from "sanity";

export interface CustomerCase {
  language: string;
  _id: string;
  basicTitle: string;
  _updatedAt: string;
  slug: Slug;
  _createdAt: string;
  _rev: string;
  _type: string;
  richText: PortableTextBlock[];
}
