import { Consultants } from "studioShared/lib/interfaces/customerCases";

export interface IEventPosting {
  _key: string;
  eventTitle: string;
  locations: ILocation[];
  externalLink: string;
  eventDescription: string;
  date: string;
  tags: { tag: string }[];
  consultants: Consultants[];
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}

export interface ILocation {
  locationString: string;
}
