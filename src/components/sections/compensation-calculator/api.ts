import { isSalariesType } from "studio/components/salariesInput/utils/parseSalaries";
import { COMPENSATIONS_SALARY_BY_YEAR } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { Result, ResultError, ResultOk } from "studio/utils/result";

import { SalaryData } from "./types";

export async function getSalaryByYear(
  year: number,
  language: string,
): Promise<Result<SalaryData, unknown>> {
  const res = await loadStudioQuery<{
    slug: string;
    salariesByLocation: { yearlySalaries: { salaries: string } };
  }>(
    COMPENSATIONS_SALARY_BY_YEAR,
    {
      year,
      language,
    },
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

    if (!isSalariesType(parsedSalaries) || !parsedSalaries[year]) {
      return ResultError("Parsed salaries data was not valid");
    }

    return ResultOk(parsedSalaries);
  } catch {
    return ResultError("Parsed salaries data was not valid");
  }
}
