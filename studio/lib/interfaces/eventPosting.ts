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
  internalLink?: {
    url: { _type: "reference"; _ref: string } | undefined;
    _type: "reference";
    _ref: string;
  };
}

export interface IEventPostings {
  eventPostingsArray: IEventPosting[];
}

export interface ILocation {
  locationString: string;
}
