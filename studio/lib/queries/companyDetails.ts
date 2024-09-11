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

export const COMPANY_LOCATIONS_QUERY = groq`*[_type == "companyLocation"]`;
