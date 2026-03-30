import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import {
  SalariesByLocationPage,
  YearlySalaries,
} from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { ILink } from "studio/lib/interfaces/navigation";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import {
  COMPENSATIONS_HANDBOOK_LINKS,
  SALARIES_BY_LOCATION_QUERY,
} from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { ResultOk } from "studio/utils/result";

export async function getHandbookLinksFromCompensationPage(language: string) {
  const res = await loadStudioQuery<{ handbookLinks: ILink[] }>(
    COMPENSATIONS_HANDBOOK_LINKS,
    { language },
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60,
      },
    },
  );

  return ResultOk(res.data.handbookLinks);
}

export async function getLocale() {
  const res = await loadStudioQuery<LocaleDocument>(LOCALE_QUERY);
  return res.data;
}

interface SalariesByLocationResponse {
  yearlySalariesByLocation?: SalariesByLocationPage[];
  // @deprecated REMOVE - fallback during migration
  yearlySalaries?: YearlySalaries[];
}

export async function getSalariesByLocation(): Promise<{
  salariesByLocation: SalariesByLocationPage[];
  locations: CompanyLocation[];
  // @deprecated REMOVE - fallback during migration
  globalSalaries: YearlySalaries[];
}> {
  const [salariesRes, locationsRes] = await Promise.all([
    loadStudioQuery<SalariesByLocationResponse>(
      SALARIES_BY_LOCATION_QUERY,
      {},
      { cache: "force-cache", next: { revalidate: 60 * 60 * 24 } },
    ),
    loadStudioQuery<CompanyLocation[]>(
      COMPANY_LOCATIONS_QUERY,
      {},
      { cache: "force-cache", next: { revalidate: 60 * 60 * 24 } },
    ),
  ]);

  return {
    salariesByLocation: salariesRes.data?.yearlySalariesByLocation ?? [],
    locations: locationsRes.data ?? [],
    globalSalaries: salariesRes.data?.yearlySalaries ?? [],
  };
}

export function isSalariesType(
  value: unknown,
): value is Record<string, number> {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.entries(value).every(
      ([k, v]) => !isNaN(Number(k)) && typeof v === "number",
    )
  );
}
