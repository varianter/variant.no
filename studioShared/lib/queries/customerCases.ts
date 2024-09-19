import { groq } from "next-sanity";

export const CUSTOMER_CASES_QUERY = groq`*[_type == "CustomerCase"]
`;
