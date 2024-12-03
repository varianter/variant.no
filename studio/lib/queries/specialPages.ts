import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT } from "./i18n";
import { translatedFieldFragment } from "./utils/i18n";

//Compensations
export const COMPENSATIONS_PAGE_BY_SLUG_QUERY = groq`
  *[_type == "compensations" && ${translatedFieldFragment("slug")} == $slug][0] {
    ...,
    ${LANGUAGE_FIELD_FRAGMENT},
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
export const COMPENSATIONS_SALARIES = groq`
  *[_type == "compensations"][0] {
    "slug": ${translatedFieldFragment("slug")},
    "salariesByLocation": salariesByLocation[] {
      ...
    },
  }
`;

// Just select the first location and the first year..
// @TODO: make this a bit more robust.
export const COMPENSATIONS_SALARY_BY_YEAR = groq`
  *[_type == "compensations"][0] {
    "slug": ${translatedFieldFragment("slug")},
    "salariesByLocation": salariesByLocation[0] {
      "yearlySalaries": yearlySalaries[0] {
        ...
      }
    },
  }
`;
export const COMPENSATIONS_PAGE_SITEMAP_QUERY = groq`
  *[_type == "compensations"][0] {
    _updatedAt,
    slug
  }
`;

//Customer Cases
export const CUSTOMER_CASES_PAGE_QUERY = groq`
  *[_type == "customerCasesPage" && ${translatedFieldFragment("slug")} == $slug][0]{
    ...,
    "language": $language,
    "slug": ${translatedFieldFragment("slug")},
    "basicTitle": ${translatedFieldFragment("basicTitle")},
    "seo": ${translatedFieldFragment("seo")} {
      "title": seoTitle,
      "description": seoDescription,
      "imageUrl": seoImage.asset->url,
      "keywords": seoKeywords
    },
  }`;

export const CUSTOMER_CASES_PAGE_SITEMAP_QUERY = groq`
  *[_type == "customerCasesPage"][0] {
    _updatedAt,
    slug
  }
`;
