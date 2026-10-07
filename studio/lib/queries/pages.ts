import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT, TRANSLATED_LINK_FRAGMENT } from "./i18n";
import { translatedFieldFragment } from "./utils/i18n";

export const INTERNATIONALIZED_IMAGE_FRAGMENT = groq`
  asset,
  "metadata": asset -> metadata {
    lqip
  },
  "alt": ${translatedFieldFragment("alt")},
  _key, 
`;

const SECTIONS_FRAGMENT = groq`
  sections[]{
    ...,
    _type == "hero" => {
      ...,
      "eyebrow": ${translatedFieldFragment("eyebrow")},
      "title": ${translatedFieldFragment("title")},
      "description": ${translatedFieldFragment("description")},
      "image": image {${INTERNATIONALIZED_IMAGE_FRAGMENT}},
    },
    _type == "handbookSection" => {
      ...,
      "handbookTitle": ${translatedFieldFragment("handbookTitle")},
      "handbookDescription": ${translatedFieldFragment("handbookDescription")},
      "handbookLink": handbookLink {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "splitSection" => {
      ...,
      "title": ${translatedFieldFragment("splitSectionTitle")},
      "sections": sections[]{
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
    _type == "imageSplitSection" => {
      ...,
      "content": content[]{
        ...,
        "basicTitle": ${translatedFieldFragment("basicTitle")},
        "description": ${translatedFieldFragment("description")}
      },
      "imageExtended": imageExtended { ..., ${INTERNATIONALIZED_IMAGE_FRAGMENT} }, 
      "actions": actions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "imageSection" => {
      ...,
      "image": image {${INTERNATIONALIZED_IMAGE_FRAGMENT}},
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
    },
    _type == "blogSection" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "buttonTitle": ${translatedFieldFragment("buttonTitle")},
      "postNumber": postNumber,
    },
    _type == "employees" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")}
    },
    _type == "contactBox" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "optionalSubtitle": ${translatedFieldFragment("optionalSubtitle")},
      "contactPoints": contactPoints[] {
        ...,
        "overrideTitle": ${translatedFieldFragment("overrideTitle")}
      }
    },
    _type == "jobs" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "subtitle": ${translatedFieldFragment("subtitle")}
    },
    _type == "events" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "subtitle": ${translatedFieldFragment("subtitle")},
      "eventPostingsArray": eventPostingsArray[] {
        ...,
        "eventTitle": ${translatedFieldFragment("eventTitle")},
        "eventDescription": ${translatedFieldFragment("eventDescription")},
        "locations": locations[]{
          "locationString": ${translatedFieldFragment("locationString")}
        },
        "date": date,
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
        }
      }
    },
    _type == "employeeHighlight" => {
      // New array of employees; fallback to legacy single fields
      employees[]{
        "basicTitle": ${translatedFieldFragment("basicTitle")},
        "name": name,
        "description": ${translatedFieldFragment("description")},
        "employeePhoto": employeePhoto { ${INTERNATIONALIZED_IMAGE_FRAGMENT} },
        "email": email,
        "phone": phone
      },
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "name": name,
      "description": ${translatedFieldFragment("description")},
      "employeePhoto": employeePhoto { ${INTERNATIONALIZED_IMAGE_FRAGMENT} }
    },
    _type == "customerCasesEntry" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")}
    },
    _type == "opennessSection" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
      "image": image { ${INTERNATIONALIZED_IMAGE_FRAGMENT} }
    },
    _type == "punchLineBox" => {
      "sentences": sentences[] {
        ...,
        "mainPunchLine": ${translatedFieldFragment("mainPunchLine")},
        "actionLine": ${translatedFieldFragment("actionLine")},
      }
    },
    _type == "generositySection" => {
      ...,
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
      "handbookBlock": handbookBlock {
        ...,
        "handbookTitle": ${translatedFieldFragment("handbookTitle")},
        "handbookDescription": ${translatedFieldFragment("handbookDescription")},
        "handbookLink": handbookLink {
          ...,
          ${TRANSLATED_LINK_FRAGMENT}
        }
      }
    },
    _type == "logoSalad" => {
      "title": ${translatedFieldFragment("title")},
      "logos": logos[] {
        ${INTERNATIONALIZED_IMAGE_FRAGMENT}
      }
    },
    _type == "learningSection" => {
      ...,
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
      "image": image { ${INTERNATIONALIZED_IMAGE_FRAGMENT} },
      "articleTag": ${translatedFieldFragment("articleTag")},
      "articleTitle": ${translatedFieldFragment("articleTitle")},
      "articleSubtitle": ${translatedFieldFragment("articleSubtitle")}
    },
    _type == "textContent" => {
      ...,
      "textType": textType,
      "textTitle": textTitle {
        ...,
        "title": ${translatedFieldFragment("title")},
        "eyebrow": ${translatedFieldFragment("eyebrow")}
      },
      "textParagraph": textParagraph {
        ...,
        "paragraphHeader": ${translatedFieldFragment("paragraphHeader")},
        "textContent": ${translatedFieldFragment("textContent")}
      },
      "richText": ${translatedFieldFragment("richText")},
      "textQuote": textQuote {
        ...,
        "author": ${translatedFieldFragment("author")},
        "quote": ${translatedFieldFragment("quote")}
      }
    },
    _type == "eventRegistration" => {
      ...,
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "emailLabel": ${translatedFieldFragment("emailLabel")},
      "firstNameLabel": ${translatedFieldFragment("firstNameLabel")},
      "lastNameLabel": ${translatedFieldFragment("lastNameLabel")},
      "phoneLabel": ${translatedFieldFragment("phoneLabel")},
      "companyLabel": ${translatedFieldFragment("companyLabel")},
      "termsAndConditionsLabel": ${translatedFieldFragment("termsAndConditionsLabel")},
      "submitButtonText": ${translatedFieldFragment("submitButtonText")},
      "successMessage": ${translatedFieldFragment("successMessage")},
      "errorMessage": ${translatedFieldFragment("errorMessage")}
    },
    _type == "fieldGrid" => {
      ...,
      "title": ${translatedFieldFragment("title")},
      "fields": fields[]->{
        ...,
        "title": ${translatedFieldFragment("title")},
        "description": ${translatedFieldFragment("description")},
        "link": link {
          ...,
          ${TRANSLATED_LINK_FRAGMENT}
        },
        "readingListeningTime": ${translatedFieldFragment("readingListeningTime")},
      }
    },
    _type == "imageCarousel" => {
      "title": ${translatedFieldFragment("title")},
      "images": images[] {
        _key,
        "image": image { ${INTERNATIONALIZED_IMAGE_FRAGMENT} },
        "caption": ${translatedFieldFragment("caption")}
      }
    }
  }
  
`;

export const SEO_FRAGMENT = groq`
  "seo": seo{
    "title": seoTitle,
    "description": seoDescription,
    "imageUrl": seoImage.asset->url,
    "keywords": seoKeywords
  },
`;

export const PAGE_FRAGMENT = groq`
  ...,
  "slug": ${translatedFieldFragment("slug")},
  "basicTitle": ${translatedFieldFragment("basicTitle")},
  ${LANGUAGE_FIELD_FRAGMENT},
  ${SECTIONS_FRAGMENT},
  ${SEO_FRAGMENT}
`;

export const PAGE_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const PAGES_SITEMAP_QUERY = groq`
  *[_type == "pageBuilder"]{
    _updatedAt,
    slug
  }
`;

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "pageBuilder" && ${translatedFieldFragment("slug")} == $slug][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const FIELD_GRID_QUERY = groq`
  *[_type == "fieldGrid" && _id == $id][0]{
    "title": ${translatedFieldFragment("title")},
    fields[]->{
      ...,
      "title": ${translatedFieldFragment("title")},
      "description": ${translatedFieldFragment("description")},
      "link": link {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      },
    }
  }
`;
