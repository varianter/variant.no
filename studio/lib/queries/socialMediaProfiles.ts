import { groq } from "next-sanity";

export const SOMEPROFILES_QUERY = groq`
  *[_type == "soMeLinksID"][0]`;
