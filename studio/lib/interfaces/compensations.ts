import { PortableTextBlock } from "sanity";

import { Reference, Slug } from "./global";

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

export interface SalariesObject {
  _type: string;
  _key: string;
  year: number;
  salaries: string;
}

export interface BonusesByLocationObject {
  _type: string;
  _key: string;
  location: Reference;
  yearlyBonuses: BonusObject[];
}

export interface BonusObject {
  _type: string;
  _key: string;
  year: number;
  bonus: number;
}

export interface SalariesByLocation {
  _key: string;
  _type: string;
  location: Reference;
  yearlySalaries: SalariesObject[];
}

export interface CompensationsDocument {
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
  bonusesByLocation: BonusesByLocationObject[];
  salariesByLocation: SalariesByLocation[];
  showSalaryCalculator: boolean;
}
