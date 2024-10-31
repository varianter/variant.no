import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT, TRANSLATED_LINK_FRAGMENT } from "./i18n";
import { translatedFieldFragment } from "./utils/i18n";

const SECTIONS_FRAGMENT = groq`
  sections[]{
    ...,
    _type == "hero" => {
      ...,
      callToActions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
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
    _type == "ctaSection" => {
      ...,
      callToActions[] {
        ...,
        ${TRANSLATED_LINK_FRAGMENT}
      }
    },
    _type == "employees" => {
      "basicTitle": ${translatedFieldFragment("basicTitle")}
    }
  }
`;

export const SEO_FRAGMENT = groq`
  "seo": ${translatedFieldFragment("seo")} {
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
