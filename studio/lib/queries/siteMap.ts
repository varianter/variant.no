import { groq } from "next-sanity";

//Site Map
export const DOCUMENTS_WITH_SLUG_QUERY = groq`
  *[defined(slug)]
`;
