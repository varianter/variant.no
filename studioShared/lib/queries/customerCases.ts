import { groq } from "next-sanity";

export const CUSTOMER_CASES_QUERY = groq`*[_type == "customerCase" && language == $language]
`;

export const CUSTOMER_CASE_QUERY = groq`*[_type == "customerCase" && slug.current == $slug && language == $language][0]`;
