import { groq } from "next-sanity";

export const DEFAULT_LANGUAGE_QUERY = groq`*[_type == "languageSettings" && _id == "languageSettings"][0].languages[default]`;
