import { groq } from "next-sanity";
import { companyInfoID } from "../../schemas/documents/admin/companyInfo";

export const COMPANY_INFO_QUERY = groq`*[_type == "${companyInfoID}"][0]`;

export const COMPANY_LOCATIONS_QUERY = groq`*[_type == "companyLocation"]`;
