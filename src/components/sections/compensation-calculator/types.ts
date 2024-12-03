import { SalariesByLocation } from "studio/lib/interfaces/compensations";

export type CompensationData = {
  slug: string;
  salariesByLocation: SalariesByLocation[];
};
