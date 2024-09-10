import { PortableTextBlock } from "src/components/richText/RichText";
import { Slug } from "./global";

export interface Benefit {
  _type: string;
  _key: string;
  basicTitle: string;
  richText: PortableTextBlock[];
}

export interface BenefitsGroup {
  _key: string;
  location: string;
  benefitsGroup: Benefit[];
}

export interface SalariesPage {
  _type: string;
  _key: string;
  year: number;
  salaries: string;
}

export interface CompensationsPage {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  basicTitle: string;
  page: string;
  slug: Slug;
  benefitsByLocation: BenefitsGroup[];
  showSalaryCalculator: boolean;
}
