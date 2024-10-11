import { PortableTextBlock, Reference } from "sanity";

import { SeoData } from "src/utils/seo";

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
  page: string;
  slug: string;
  pensionPercent?: number;
  benefitsByLocation: BenefitsByLocation[];
  bonusesByLocation: BonusesByLocationPage[];
  salariesByLocation: SalariesByLocation[];
  showSalaryCalculator: boolean;
  seo: SeoData;
}
