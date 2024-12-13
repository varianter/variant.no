export type SeoData = {
  title?: string;
  description?: string;
  imageUrl?: string;
  keywords?: string;
};

export type DefaultSeo = {
  _id: string;
  _type: "seoFallback";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: SeoData;
};
