import { Consultants } from "studioShared/lib/interfaces/customerCases";
import { TextBlock } from "studioShared/lib/interfaces/textBlock";

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
  eventImage?: IImage;
  subtitle?: string;
  text?: TextBlock[];
  seo?: SeoData;
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}

export interface ILocation {
  locationString: string;
}
