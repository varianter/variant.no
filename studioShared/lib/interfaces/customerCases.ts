import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { QuoteBlock } from "./quoteBlock";
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
  image: IImage;
}

export type CustomerCaseSections = (RichTextBlock | ImageBlock | QuoteBlock)[];

export interface CustomerCase extends CustomerCaseBase {
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSections;
}
