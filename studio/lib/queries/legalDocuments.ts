import { groq } from "next-sanity";

export const LEGAL_DOCUMENTS_BY_LANG_QUERY = groq`*[_type == "legalDocument" && language == $language]`;

export const LEGAL_DOCUMENTS_BY_SLUG_AND_LANG_QUERY = groq`*[_type == "legalDocument" && language == $language && slug.current == $slug][0]`;
