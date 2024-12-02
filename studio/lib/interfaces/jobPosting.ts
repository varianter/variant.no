import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

export interface IJobPosting {
  _key: string;
  role: string;
  locations: CompanyLocation[];
  recruiteeAdUrl: string;
}

export interface IJobPostings {
  jobPostingsArray: IJobPosting[];
}
