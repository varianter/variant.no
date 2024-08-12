import { groq } from "next-sanity";

export const LEGAL_DOCUMENTS_QUERY = groq`
  *[_type == "legalDocuments"]
`;

export const LEGAL_DOCUMENT_SLUG_QUERY = groq`
  *[_type == "legalDocuments" && slug.current == $slug][0]
`;
