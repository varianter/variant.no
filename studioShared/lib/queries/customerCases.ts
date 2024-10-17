import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT } from "studio/lib/queries/i18n";
import { translatedFieldFragment } from "studio/lib/queries/utils/i18n";

const CUSTOMER_CASE_BASE_FRAGMENT = groq`
  _id,
  ${LANGUAGE_FIELD_FRAGMENT},
  "slug": ${translatedFieldFragment("slug")},
  "basicTitle": ${translatedFieldFragment("basicTitle")},
  "description": ${translatedFieldFragment("description")}
`;

export const CUSTOMER_CASES_QUERY = groq`
  *[_type == "customerCase"]{
    ${CUSTOMER_CASE_BASE_FRAGMENT}
  }
`;

const INTERNATIONALIZED_IMAGE_FRAGMENT = groq`
  asset,
  "alt": ${translatedFieldFragment("alt")}
`;

export const CUSTOMER_CASE_QUERY = groq`
  *[_type == "customerCase" && ${translatedFieldFragment("slug")} == $slug][0] {
    ${CUSTOMER_CASE_BASE_FRAGMENT},
    "image": image {
      ${INTERNATIONALIZED_IMAGE_FRAGMENT}
    },
    "richText": ${translatedFieldFragment("richText")},
    "projectInfo": projectInfo {
      customer,
      "name": ${translatedFieldFragment("name")},
      "duration": ${translatedFieldFragment("duration")},
      "sector": ${translatedFieldFragment("sector")},
      "delivery": ${translatedFieldFragment("delivery")},
      consultants
    },
    "sections": sections[] {
      _type,
      _type == "richTextBlock" => {
        "richText": ${translatedFieldFragment("richText")},
      },
      _type == "imageBlock" => {
        "images": images[] {
          ${INTERNATIONALIZED_IMAGE_FRAGMENT}
        } 
      }
    }
  }
`;

export const CUSTOMER_CASES_SITEMAP_QUERY = groq`
  *[_type == "customerCase"] {
    _updatedAt,
    language,
    slug
  }
`;
