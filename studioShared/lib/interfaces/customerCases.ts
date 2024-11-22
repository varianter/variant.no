import { IImage } from "studio/lib/interfaces/media";

import { ImageBlock } from "./imageBlock";
import { ListBlock } from "./listBlock";
import { ResultsBlock } from "./resultsBlock";
import { SplitSection } from "./splitSection";

export interface CustomerCaseProjectInfo {
  customer: string;
  customerSectors: CustomerSector[];
  url: string;
  sector: string[];
  collaborators: string[];
  deliveries: Deliveries;
  consultants: string[];
}

export interface CustomerSector {
  customerSector: string;
  key: string;
}

export interface Deliveries {
  design: DesignDelivery[];
  development: DevelopmentDelivery[];
  projectManagement: ProjectManagementDelivery[];
  key: string;
}

export interface DesignDelivery {
  designDelivery: string;
  key: string;
}

export interface DevelopmentDelivery {
  developmentDelivery: string;
  key: string;
}

export interface ProjectManagementDelivery {
  projectManagementDelivery: string;
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

export type CustomerCaseSection =
  | ImageBlock
  | SplitSection
  | ResultsBlock
  | ListBlock;

export interface CustomerCase extends CustomerCaseBase {
  projectInfo: CustomerCaseProjectInfo;
  sections: CustomerCaseSection[];
  featuredCases?: CustomerCaseBase[] | null;
}
