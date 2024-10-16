import { groq } from "next-sanity";

import { translatedFieldFragment } from "./utils/i18n";

export const SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY = groq`
  *[${translatedFieldFragment("slug")} == $slug][0].slug[] {
    _key,
    value
  }
`;

export const SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY = groq`
  *[${translatedFieldFragment("slug")} == $slug && _type == $type][0].slug[] {
    _key,
    value
  }
`;

export const SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY = groq`
  *[_type == "translation.metadata" 
    && references(*[slug.current == $slug && language == $language][0]._id)].translations[].value->{
      "_key": language,
      "value": slug.current
    }
`;

export const SLUG_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY = groq`
  *[_type == "translation.metadata" 
    && references(*[slug.current == $slug && language == $language && _type == $type][0]._id)].translations[].value->{
      "_key": language,
      "value": slug.current
    }
`;

export const SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY = groq`
  *[defined(slug[value == $slug][0])][0].slug[_key == $language] {
    _key,
    value
  }
`;

export const SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY = groq`
  *[defined(slug[value == $slug][0]) && _type == $type][0].slug[_key == $language] {
    _key,
    value
  }
`;

export const SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY = groq`
  *[_type == "translation.metadata" 
    && references(*[slug.current == $slug][0]._id)].translations[_key == $language].value->{
      "_key": language,
      "value": slug.current
    }
`;

export const SLUG_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY = groq`
  *[_type == "translation.metadata" 
    && references(*[slug.current == $slug && _type == $type][0]._id)].translations[_key == $language].value->{
      "_key": language,
      "value": slug.current
    }
`;
