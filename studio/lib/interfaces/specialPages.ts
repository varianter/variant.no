import { SeoData } from "./seo";

export interface CustomerCasePage {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  basicTitle: string;
  page: string;
  slug: string;
  language: string;
  seo: SeoData;
}
