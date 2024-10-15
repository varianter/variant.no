import { groq } from "next-sanity";

import { translatedFieldFragment } from "studio/lib/queries/utils/i18n";

export const CUSTOMER_CASES_QUERY = groq`*[_type == "customerCase"]{
 "language": $language,
  "basicTitle": ${translatedFieldFragment("basicTitle")},
   "richText": ${translatedFieldFragment("richText")}}
`;

export const CUSTOMER_CASE_QUERY = groq`*[_type == "customerCase" && slug.current == $slug && language == $language][0]`;

export const CUSTOMER_CASES_SITEMAP_QUERY = groq`
  *[_type == "customerCase"] {
    _updatedAt,
    language,
    slug
  }
`;
