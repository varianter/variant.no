import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

export interface IJobPosting {
  _type: "jobPosting";
  _key: string;
  role: string;
  locations: CompanyLocation[];
  recruiteeAdUrl: string;
}
