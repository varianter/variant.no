import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { QuoteBlock } from "./quoteBlock";
import { ResultsBlock } from "./resultsBlock";
import { SplitSection } from "./splitSection";
import { TextBlock } from "./textBlock";

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

export type BaseCustomerCaseSection = TextBlock | ImageBlock | QuoteBlock;

export type CustomerCaseSection =
  | BaseCustomerCaseSection
  | SplitSection
  | ResultsBlock;

export interface CustomerCase extends CustomerCaseBase {
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSection[];
  featuredCases?: CustomerCaseBase[] | null;
}
