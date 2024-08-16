import { groq } from "next-sanity";

export const SITESETTINGS_QUERY = groq`*[_type == "siteSettings"]{
    brandAssets,
    siteMetadata,
    legalPages,
}`;
