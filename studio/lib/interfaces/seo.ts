import { SeoData } from "src/utils/seo";

export type DefaultSeo = {
  _id: string;
  _type: "seoFallback";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: SeoData;
};
