export type SeoFallback = {
  _id: string;
  _type: "seoFallback";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: {
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    seoImageUrl?: string;
  };
};
