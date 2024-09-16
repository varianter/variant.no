import { groq } from "next-sanity";

export const DEFAULT_SEO_QUERY = groq`*[_type == "seoFallback"]{
  seo {
    seoTitle,
    seoDescription,
    seoKeywords,
    "seoImageUrl": seoImage.asset->url
  }
}[0]`;
