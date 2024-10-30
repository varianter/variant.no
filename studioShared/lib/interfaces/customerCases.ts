import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { QuoteBlock } from "./quoteBlock";
import { RichTextBlock } from "./richTextBlock";
import { SplitSection } from "./splitSection";

export interface CustomerCaseProjectInfo {
  customer: string;
  name: string;
  duration: string;
  sector: string;
  deliveries: Delivery[];
  consultants: string[];
}

export interface Delivery {
  delivery: string;
  key: string;
}

export interface CustomerCaseBase {
  _id: string;
  language: string;
  slug: string;
  basicTitle: string;
  description: string;
  image: IImage;
}

export type BaseCustomerCaseSection = RichTextBlock | ImageBlock | QuoteBlock;

export type CustomerCaseSection = BaseCustomerCaseSection | SplitSection;

export interface CustomerCase extends CustomerCaseBase {
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSection[];
  featuredCases?: CustomerCaseBase[] | null;
}
