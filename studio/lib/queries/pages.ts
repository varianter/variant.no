import { groq } from "next-sanity";

import { LANGUAGE_FIELD_FRAGMENT, TRANSLATED_LINK_FRAGMENT } from "./i18n";

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
    }
  }
`;

export const PAGE_FRAGMENT = groq`
  ...,
  ${LANGUAGE_FIELD_FRAGMENT},
  ${SECTIONS_FRAGMENT}
`;

export const PAGE_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const PAGE_SEO_QUERY = groq`
  *[_type == "pageBuilder" && _id == $id][0]{
      "title": seo.seoTitle,
      "description": seo.seoDescription,
      "imageUrl": seo.seoImage.asset->url
  }
`;

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "pageBuilder" && slug.current == $slug][0]{
    ${PAGE_FRAGMENT}
  }
`;

export const SEO_SLUG_QUERY = groq`
  *[defined(seo) && slug.current == $slug][0]{
      "title": seo.seoTitle,
      "description": seo.seoDescription,
      "imageUrl": seo.seoImage.asset->url
  }
`;
