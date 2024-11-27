import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT } from "studio/lib/queries/i18n";
import { translatedFieldFragment } from "studio/lib/queries/utils/i18n";

const INTERNATIONALIZED_IMAGE_FRAGMENT = groq`
  asset,
  "metadata": asset -> metadata {
    lqip
  },
  "alt": ${translatedFieldFragment("alt")}
`;

const CUSTOMER_CASE_BASE_FRAGMENT = groq`
  _id,
  domains,
  ${LANGUAGE_FIELD_FRAGMENT},
  "slug": ${translatedFieldFragment("slug")},
  "basicTitle": ${translatedFieldFragment("basicTitle")},
  "description": ${translatedFieldFragment("description")},
  "image": image {
    ${INTERNATIONALIZED_IMAGE_FRAGMENT}
  }
`;

export const CUSTOMER_CASES_QUERY = groq`
  *[_type == "customerCase" && ($domain == null || $domain in domains)]{
    ${CUSTOMER_CASE_BASE_FRAGMENT}
  }
`;

export const SPLIT_SECTIONS_FRAGMENT = groq`
  _type == "emptySection" => {},
  _type == "textBlock" => {
    "sectionTitle": ${translatedFieldFragment("sectionTitle")},
    "text": ${translatedFieldFragment("text")},
     url,
     textBlockType,
  },
  _type == "imageBlock" => {
    "image": image {${INTERNATIONALIZED_IMAGE_FRAGMENT}},
    fullWidth
  },
`;

export const CUSTOMER_CASE_QUERY = groq`
  *[_type == "customerCase" && ${translatedFieldFragment("slug")} == $slug && ($domain == null || $domain in domains)][0] {
    ${CUSTOMER_CASE_BASE_FRAGMENT},
    "projectInfo": projectInfo {
      customer,
      "customerSectors": customerSectors[] {
        _key,
        "customerSector": ${translatedFieldFragment("customerSectorItem")}
        },
      url,
      "deliveries": {
        "design": deliveries.design[] {
          "designDelivery": ${translatedFieldFragment("designDelivery")}
        },
        "development": deliveries.development[] {
          "developmentDelivery": ${translatedFieldFragment("developmentDelivery")}
        },
        "projectManagement": deliveries.projectManagement[] {
          "projectManagementDelivery": ${translatedFieldFragment("projectManagementDelivery")}
        }
      },
      collaborators,
      consultants
    },
    "sections": sections[] {
      _key,
      _type,
      _type == "splitSection" => {
        "sections": sections[] {
          _key,
          _type,

          ${SPLIT_SECTIONS_FRAGMENT}
        }
      },
      _type == "resultsBlock" => {
        "resultsBlockTitle": ${translatedFieldFragment("resultsBlockTitle")},
        "quote": quote[] {
          _key,
          "quoteText": ${translatedFieldFragment("quoteText")},
          "quoteAuthor": ${translatedFieldFragment("quoteAuthor")},
        },
        "resultsList": resultsList[] {
          _key,
          result,
          "description": ${translatedFieldFragment("description")},
          },
        },
      _type == "listBlock" => {
        "description": ${translatedFieldFragment("description")},
        "list": list[] {
          _key,
          "text": ${translatedFieldFragment("text")},
          },
        },
      _type == "imageBlock" => {
        "image": image {${INTERNATIONALIZED_IMAGE_FRAGMENT}},
        fullWidth
        },
    },
    "featuredCases": featuredCases[] -> {
      ${CUSTOMER_CASE_BASE_FRAGMENT}
    }
  }
`;

export const CUSTOMER_CASES_SITEMAP_QUERY = groq`
  *[_type == "customerCase"] {
    _updatedAt,
    "slug": ${translatedFieldFragment("slug")}
  }
`;
