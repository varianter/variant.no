import { groq } from "next-sanity";

export const COMPENSATIONS_PAGE_QUERY = groq`
  *[_type == "compensations" && slug.current == $slug][0]
`;