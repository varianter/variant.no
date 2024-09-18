import { groq } from "next-sanity";

import { companyInfoID } from "studio/schemas/documents/companyInfo";

export const COMPANY_INFO_QUERY = groq`*[_type == "${companyInfoID}"][0]`;

export const COMPANY_LOCATIONS_QUERY = groq`*[_type == "companyLocation"]`;