import { LocaleDocument } from "studio/lib/interfaces/locale";
import { ILink } from "studio/lib/interfaces/navigation";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import {
  COMPENSATIONS_HANDBOOK_LINKS,
  COMPENSATIONS_SALARY_BY_YEAR,
} from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { Result, ResultError, ResultOk } from "studio/utils/result";

import { SalaryData } from "./types";

export async function getHandbookLinksFromCompensationPage(
  language: string,
): Promise<Result<ILink[], unknown>> {
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

export async function getLatestSalaries(): Promise<
  Result<SalaryData, unknown>
> {
  const res = await loadStudioQuery<{
    salariesByLocation: { yearlySalaries: { salaries: string } };
  }>(
    COMPENSATIONS_SALARY_BY_YEAR,
    {},
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24 * 120,
      },
    },
  );

  try {
    const parsedSalaries = JSON.parse(
      res.data.salariesByLocation.yearlySalaries.salaries,
    );

    if (!isSalariesType(parsedSalaries)) {
      return ResultError("Parsed salaries data was not valid");
    }

    return ResultOk(parsedSalaries);
  } catch {
    return ResultError("Parsed salaries data was not valid");
  }
}

interface Salaries {
  [year: string]: number;
}

export function isSalariesType(value: unknown): value is Salaries {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.entries(value).every(
      ([k, v]) => !isNaN(Number(k)) && typeof v === "number",
    )
  );
}
