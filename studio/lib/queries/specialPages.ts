import { groq } from "next-sanity";

export const CUSTOMER_CASES_PAGE_QUERY = groq`
  *[_type == "customerCases" && slug.current == $slug][0]
`;
