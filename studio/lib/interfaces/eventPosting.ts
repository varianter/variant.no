import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

export interface IEventPosting {
  _key: string;
  eventTitle: string;
  locations: CompanyLocation[];
  externalLink: string;
  eventDescription: string;
  date: Date;
  tags: array;
  consultants: Consultants[];
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}
