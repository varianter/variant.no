import { groq } from "next-sanity";

import { companyInfoID } from "studio/schemas/documents/admin/companyInfo";

//Parent Company
export const COMPANY_INFO_QUERY = groq`*[_type == "${companyInfoID}"][0]`;

//Company Locations
export const COMPANY_LOCATIONS_QUERY = groq`*[_type == "companyLocation"]`;

//Legal Documents
export const LEGAL_DOCUMENTS_BY_LANG_QUERY = groq`*[_type == "legalDocument" && language == $language]`;

export const LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY = groq`*[_type == "legalDocument" && language == $language && slug.current == $slug][0]`;

export const LEGAL_DOCUMENTS_SITEMAP_QUERY = groq`
  *[_type == "legalDocument"] {
    _updatedAt,
    language,
    slug
  }
`;

// Job Postings
export const JOB_POSTINGS_QUERY = groq`
  *[_type == "jobPostings"] {
    jobPostingsArray[] {
      ...,
      locations[] -> {
        ...
      }
    }
  }
`;
