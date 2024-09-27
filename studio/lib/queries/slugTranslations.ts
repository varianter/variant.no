import { groq } from "next-sanity";

export const SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY = groq`
  *[slug.current == $slug && language == $language][0]{
    "_translations": *[
      _type == "translation.metadata" 
      && references(^._id)
  ].translations[].value->{
      language,
      "slug": slug.current,
    },
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
        "slug": slug.current,
      }
    )[language == $language],
  }
`;
