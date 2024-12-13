import { groq } from "next-sanity";

export const LOCALE_QUERY = groq`*[_type == "locale" && _id == "locale"][0]`;
