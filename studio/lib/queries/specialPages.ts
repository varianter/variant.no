import { groq } from "next-sanity";

export const CUSTOMER_CASES_PAGE_QUERY = groq`
  *[_type == "customerCasesPage" && slug.current == $slug][0]`;

export const COMPENSATIONS_PAGE_QUERY = groq`
  *[_type == "compensations" && slug.current == $slug][0]
`;
