import { groq } from "next-sanity";

import { translatedFieldFragment } from "./utils/i18n";

//Compensations
export const COMPENSATIONS_PAGE_QUERY = groq`
  *[_type == "compensations" && ${translatedFieldFragment("slug")} == $slug][0] {
    ...,
    "language": $language,
    "slug": ${translatedFieldFragment("slug")},
    "basicTitle": ${translatedFieldFragment("basicTitle")},
    "benefitsByLocation": benefitsByLocation[] {
      ...,
      "benefits": benefits[] {
        ...,
        "basicTitle": ${translatedFieldFragment("basicTitle")},
        "richText": ${translatedFieldFragment("richText")}
      }
    },
    "seo": ${translatedFieldFragment("seo")} {
      "title": seoTitle,
      "description": seoDescription,
      "imageUrl": seoImage.asset->url,
      "keywords": seoKeywords
    },
  }
`;

//Customer Cases
export const CUSTOMER_CASES_PAGE_QUERY = groq`
  *[_type == "customerCasesPage" && slug.current == $slug][0]`;
