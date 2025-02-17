import { PortableTextBlock, Reference } from "sanity";

import { CompanyLocation } from "./companyDetails";
import { ILink } from "./navigation";
import { SplitSection } from "./pages";
import { SeoData } from "./seo";

export enum BenefitTypeEnum {
  Bonus = "bonus",
  Salary = "salaryGrowth",
  Pension = "pension",
}

export interface Benefit {
  _type: string;
  _key: string;
  benefitType: BenefitTypeEnum;
  basicTitle: string;
  richText: PortableTextBlock[];
  location?: CompanyLocation;
}

export interface SalariesPage {
  _type?: string;
  _key: string;
  year: number;
  salaries: string;
}

export const isSalariesPage = (value: unknown): value is SalariesPage => {
  return (
    typeof value === "object" &&
    value !== null &&
    (!("_type" in value) || typeof value._type === "string") &&
    "_key" in value &&
    typeof value._key === "string" &&
    "year" in value &&
    typeof value.year === "number" &&
    "salaries" in value &&
    typeof value.salaries === "string"
  );
};

export interface BonusesByLocationPage {
  _type: string;
  _key: string;
  location: Reference;
  yearlyBonuses: BonusPage[];
}

export interface BonusPage {
  _type?: string;
  _key: string;
  year: number;
  bonus: number;
}

export const isBonusPage = (value: unknown): value is BonusPage => {
  return (
    typeof value === "object" &&
    value !== null &&
    (!("_type" in value) || typeof value._type === "string") &&
    "_key" in value &&
    typeof value._key === "string" &&
    "year" in value &&
    typeof value.year === "number" &&
    "bonus" in value &&
    typeof value.bonus === "number"
  );
};

export interface SalariesByLocation {
  _key: string;
  _type: string;
  location: Reference;
  yearlySalaries: SalariesPage[];
}

export interface CompensationsPage {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  language: string;
  basicTitle: string;
  richText: PortableTextBlock[];
  page: string;
  slug: string;
  pensionPercent?: number;
  benefits: Benefit[];
  bonusesByLocation: BonusesByLocationPage[];
  salariesByLocation: SalariesByLocation[];
  handbookLinks: ILink[];
  seo: SeoData;
  splitSection: SplitSection;
}
