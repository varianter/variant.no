import { groq } from "next-sanity";

import { supportedLanguagesID } from "studio/schemas/documents/supportedLanguages";

export const DEFAULT_LANGUAGE_QUERY = groq`*[_type == "${supportedLanguagesID}" && _id == "${supportedLanguagesID}"][0] {
    "defaultLanguage": languages[isDefault == true][0].language
}`;