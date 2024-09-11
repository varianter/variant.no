import { PortableTextBlock } from "src/components/richText/RichText";
import { Slug } from "./global";

export interface Benefit {
  _type: string;
  _key: string;
  basicTitle: string;
  richText: PortableTextBlock[];
}

export interface BenefitsByLocation {
  _key: string;
  location: { _ref: string; _type: string };
  benefits: Benefit[];
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
  benefitsByLocation: BenefitsByLocation[];
  showSalaryCalculator: boolean;
}
