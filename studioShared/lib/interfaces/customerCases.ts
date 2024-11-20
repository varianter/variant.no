import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { ListBlock } from "./listBlock";
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

export type BaseCustomerCaseSection = TextBlock | ImageBlock;

export type CustomerCaseSection =
  | BaseCustomerCaseSection
  | SplitSection
  | ResultsBlock
  | ListBlock;

export interface CustomerCase extends CustomerCaseBase {
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSection[];
  featuredCases?: CustomerCaseBase[] | null;
}
