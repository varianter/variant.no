import { PortableTextBlock } from "src/components/richText/RichText";
import { Slug } from "./global";

export interface Benefit {
  _type: string;
  _key: string;
  basicTitle: string;
  richText: PortableTextBlock[];
}

export interface Location {
  _type: string;
  _key: string;
 basicTitle: string;
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
  benefits: Benefit[];
  showSalaryCalculator: boolean;
  locations: Location[]; 
}
