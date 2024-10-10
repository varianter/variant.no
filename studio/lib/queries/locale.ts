import { groq } from "next-sanity";

import { localeID } from "studio/schemas/documents/siteSettings/locale";

export const LOCALE_QUERY = groq`*[_type == "${localeID}" && _id == "${localeID}"][0]`;
