import { SeoData } from "src/utils/seo";

import { Slug } from "./global";

export interface CustomerCasePage {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  basicTitle: string;
  page: string;
  slug: Slug;
  language: string;
  seo: SeoData;
}
