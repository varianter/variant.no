import { groq } from "next-sanity";

export const COMPANY_INFO_QUERY = groq`*[_type == "companyInfo"]{
    brandAssets,
    siteMetadata,
    defaultSEO {
        "title": seoTitle,
        "description": seoDescription,
        "keywords": seoKeywords,
        "imageUrl": seoImage.asset->url
    },
    legalPages,
}[0]`;
