import { PortableTextBlock } from "sanity";

import { Consultants } from "studioShared/lib/interfaces/customerCases";

import { IImage } from "./media";

export interface IEventPosting {
  _key: string;
  eventTitle: string;
  locations: ILocation[];
  externalLink: string;
  eventDescription: string;
  date: string;
  tags: { tag: string }[];
  consultants: Consultants[];
  createInternalPage: boolean;
  recordID: number;
  eventImage?: IImage;
  subtitle?: string;
  richText?: PortableTextBlock[];
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}

export interface ILocation {
  locationString: string;
}
