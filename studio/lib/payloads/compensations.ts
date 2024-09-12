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
  location: Reference;
  benefits: Benefit[];
}

export interface SalariesPage {
  _type: string;
  _key: string;
  year: number;
  salaries: string;
}

export interface BonusPage {
  _type: string;
  _key: string;
  year: number;
  bonus: number;
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
  pensionPercent?: number;
  benefitsByLocation: BenefitsByLocation[];
  showSalaryCalculator: boolean;
}

export interface Reference {
  _type: "reference";
  _ref: string;
}
