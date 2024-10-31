import { ILink } from "./navigation";

export interface Announcement {
  language: string;
  text: string;
  link?: ILink;
  hideAfter?: string;
}
