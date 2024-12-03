"use server";

import { isSalariesType } from "studio/components/salariesInput/utils/parseSalaries";
import { COMPENSATIONS_SALARY_BY_YEAR } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { Result, ResultError, ResultOk } from "studio/utils/result";

export async function getSalaryByYear(
  year: number,
): Promise<Result<number, unknown>> {
  const res = await loadStudioQuery<{
    salariesByLocation: { yearlySalaries: { salaries: string } };
  }>(COMPENSATIONS_SALARY_BY_YEAR, {
    year,
  });

  try {
    const parsedSalaries = JSON.parse(
      res.data.salariesByLocation.yearlySalaries.salaries,
    );
    if (!isSalariesType(parsedSalaries) || !parsedSalaries[year]) {
      return ResultError("Parsed salaries data was not valid");
    }

    return ResultOk(parsedSalaries[year] as number);
  } catch (e) {
    return ResultError("Parsed salaries data was not valid");
  }
}
