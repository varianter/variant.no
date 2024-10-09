import { groq } from "next-sanity";

import { translatedFieldFragment } from "./utils/i18n";

export const SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY = groq`
  *[${translatedFieldFragment("slug")} == $slug][0] {
    "_translations": slug[] {
      "language": _key,
      "slug": value
    }
  }
`;

export const SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY = groq`
  *[slug.current == $slug && language == $language][0]{
    "_translations": *[
      _type == "translation.metadata" 
      && references(^._id)
    ].translations[].value->{
      language,
      "slug": slug.current
    }
  }
`;

export const SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY = groq`
  *[defined(slug[value == $slug][0])][0] {
    "_translations": (slug[] {
      "language": _key,
      "slug": value
    })[language == $language]
  }
`;

export const SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY = groq`
  *[slug.current == $slug][0]{
    "_translations": (
      *[
        _type == "translation.metadata" 
        && references(^._id)
      ].translations[].value->{
        language,
        "slug": slug.current
      }
    )[language == $language]
  }
`;
