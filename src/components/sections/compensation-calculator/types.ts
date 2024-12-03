import { SalariesByLocation } from "studio/lib/interfaces/compensations";

export type CompensationData = {
  slug: string;
  salariesByLocation: SalariesByLocation[];
};
export type Degree = "bachelor" | "master";

export type SalaryData = Record<string, number>;
