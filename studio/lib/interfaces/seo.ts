export interface SeoObject {
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoImageUrl?: string;
}

export type DefaultSeo = {
  _id: string;
  _type: "seoFallback";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: SeoObject;
};
