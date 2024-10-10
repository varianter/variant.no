import { groq } from "next-sanity";

import { translatedFieldFragment } from "studio/lib/queries/utils/i18n";

export const LANGUAGE_FIELD_FRAGMENT = groq`
  "language": $language
`;
export const TRANSLATED_LINK_TITLE_FRAGMENT = groq`
  "linkTitle": ${translatedFieldFragment("linkTitle")}
`;
export const TRANSLATED_SLUG_VALUE_FRAGMENT = groq`
  select(
    slug._type == "slug" => slug.current,
    ${translatedFieldFragment("slug")}
  )
`;
export const TRANSLATED_INTERNAL_LINK_FRAGMENT = groq`
    ...select(linkType == "internal" => {
      "internalLink": internalLink->{
        "_ref": ${TRANSLATED_SLUG_VALUE_FRAGMENT}
      }
    })
`;
export const TRANSLATED_LINK_FRAGMENT = groq`
    ${LANGUAGE_FIELD_FRAGMENT},
    ${TRANSLATED_LINK_TITLE_FRAGMENT},
    ${TRANSLATED_INTERNAL_LINK_FRAGMENT}
`;
