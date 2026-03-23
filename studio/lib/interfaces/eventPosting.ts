import { PortableTextBlock } from "sanity";

import { Consultants } from "studioShared/lib/interfaces/customerCases";

import { IImage } from "./media";
import { SeoData } from "./seo";

export interface IEventPosting {
  _key: string;
  eventTitle: string;
  locations: ILocation[];
  address?: string;
  externalLink: string;
  eventDescription: string;
  date: string;
  time: string;
  tags: { tag: string }[];
  consultants: Consultants[];
  createInternalPage: boolean;
  recordID: number;
  submitButtonText?: string;
  companyRequired?: boolean;
  eventImage?: IImage;
  subtitle?: string;
  richTextInternalized?: PortableTextBlock[];
  seo?: SeoData;
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}

export interface ILocation {
  locationString: string;
}
