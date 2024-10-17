import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { RichTextBlock } from "./richTextBlock";

export interface CustomerCaseProjectInfo {
  customer: string;
  name: string;
  duration: string;
  sector: string;
  delivery: string;
  consultants: string[];
}

export interface CustomerCaseBase {
  _id: string;
  language: string;
  slug: string;
  basicTitle: string;
  description: string;
}

export type CustomerCaseSections = (RichTextBlock | ImageBlock)[];

export interface CustomerCase extends CustomerCaseBase {
  image: IImage;
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSections;
}
