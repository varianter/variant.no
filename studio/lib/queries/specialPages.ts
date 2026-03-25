import { groq } from "next-sanity";

import {
  LANGUAGE_FIELD_FRAGMENT,
  TRANSLATED_LINK_FRAGMENT,
  TRANSLATED_SLUG_VALUE_FRAGMENT,
} from "./i18n";
import { INTERNATIONALIZED_IMAGE_FRAGMENT, SEO_FRAGMENT } from "./pages";
import { translatedFieldFragment } from "./utils/i18n";

export const COMPENSATIONS_PAGE_BY_SLUG_QUERY = groq`
  *[_type == "compensations" && ${translatedFieldFragment("slug")} == $slug][0] {
    ...,
    ${LANGUAGE_FIELD_FRAGMENT},
    "slug": ${translatedFieldFragment("slug")},
    "basicTitle": ${translatedFieldFragment("basicTitle")},
    "richText": ${translatedFieldFragment("richText")},
    "benefits": benefits[] {
      ...,
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "richText": ${translatedFieldFragment("richText")},
      "location": location->{
        _id,
        _type,
        companyLocationName
      }
    },
    splitSection {
      ...,
      "title": ${translatedFieldFragment("splitSectionTitle")},
      "sections": sections[] {
        ...,
        _type == "handbookSection" => {
          ...,
          "handbookTitle": ${translatedFieldFragment("handbookTitle")},
          "handbookDescription": ${translatedFieldFragment("handbookDescription")},
          "handbookLink": handbookLink {
            ...,
            ${TRANSLATED_LINK_FRAGMENT}
          }
        },
        _type == "compensationCalculator" => {
          ...,
          "moduleTitle": ${translatedFieldFragment("moduleTitle")},
          "calculatorBlock": calculatorBlock {
            ...,
            "calculatorTitle": ${translatedFieldFragment("calculatorTitle")},
            "calculatorDescription": ${translatedFieldFragment("calculatorDescription")},
            "calculatorLink": calculatorLink {
              ...,
              ${TRANSLATED_LINK_FRAGMENT}
            }
          }
        }
      }
    },
    "seo": ${translatedFieldFragment("seo")} {
      "title": seoTitle,
      "description": seoDescription,
      "imageUrl": seoImage.asset->url,
      "keywords": seoKeywords
    }
  }
`;

export const LATEST_YEARLY_SALARIES_QUERY = groq`
  *[_id == "compensations"] {
    "yearlySalaries": yearlySalariesByLocation[0].yearlySalaries | order(year desc)[0]
  }
`;

export const COMPENSATIONS_HANDBOOK_LINKS = groq`
  *[_type == "compensations"][0] {
    "handbookLinks": handbookLinks[] {
      ...,
      ${TRANSLATED_LINK_FRAGMENT}
    }
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
    "slug": ${TRANSLATED_SLUG_VALUE_FRAGMENT}
  }
`;

export const EVENT_BY_KEY_QUERY = groq`
  *[_type == "eventPostings"][0] {
    "event": eventPostingsArray[_key == $key][0] {
      _key,
      recordID,
      companyRequired,
      address,
      "submitButtonText": ${translatedFieldFragment("submitButtonText")},
      "eventTitle": ${translatedFieldFragment("eventTitle")},
      "eventDescription": ${translatedFieldFragment("eventDescription")},
      "locations": locations[]{
        "locationString": ${translatedFieldFragment("locationString")}
      },
      date,
      time,
      "tags": tags[]{
        "tag": ${translatedFieldFragment("tag")}
      },
      "consultants": consultants[]{
        employeeEmail,
        employeeFirstName
      },
      "externalLink": externalLink,
      "internalLink": internalLink->{
        "url": ${translatedFieldFragment("slug")}
      },
      createInternalPage,
      "eventImage": eventImage { ${INTERNATIONALIZED_IMAGE_FRAGMENT} },
      "subtitle": ${translatedFieldFragment("subtitle")},
      "richTextInternalized": ${translatedFieldFragment("richTextInternalized")},
      ${SEO_FRAGMENT}
    }
  }
`;
