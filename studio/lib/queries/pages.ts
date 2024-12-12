import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT, TRANSLATED_LINK_FRAGMENT } from "./i18n";
import { translatedFieldFragment } from "./utils/i18n";

const INTERNATIONALIZED_IMAGE_FRAGMENT = groq`
  asset,
  "metadata": asset -> metadata {
    lqip
  },
  "alt": ${translatedFieldFragment("alt")}
`;

const SECTIONS_FRAGMENT = groq`
  sections[]{
    ...,
    _type == "hero" => {
      ...,
      "title": ${translatedFieldFragment("title")},
      "description": ${translatedFieldFragment("description")},
    },
    _type == "article" => {
      ...,
      link {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "callout" => {
      ...,
      link {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "imageSplitSection" => {
      ...,
      "content": content[]{
        ...,
        "basicTitle": ${translatedFieldFragment("basicTitle")},
        "description": ${translatedFieldFragment("description")},
      },
      actions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
      _type == "imageSection" => {
      ...,
        "image": image {${INTERNATIONALIZED_IMAGE_FRAGMENT}},
    },
    _type == "ctaSection" => {
      ...,
      callToActions[] {
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
      },
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
    _type == "employeeHighlight" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
    },
    _type == "customerCasesEntry" => {
      "basicTitle":${translatedFieldFragment("basicTitle")},
    },
    _type == "opennessSection" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
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
    _type == "learningSection" => {
      ...,
      "basicTitle": ${translatedFieldFragment("basicTitle")},
      "description": ${translatedFieldFragment("description")},
      "articleTag": ${translatedFieldFragment("articleTag")},
      "articleTitle": ${translatedFieldFragment("articleTitle")},
      "articleSubtitle": ${translatedFieldFragment("articleSubtitle")},
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
