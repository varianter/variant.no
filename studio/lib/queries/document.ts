import { groq } from "next-sanity";

export const DOCUMENTS_WITH_SLUG_QUERY = groq`
  *[defined(slug)]
`;
