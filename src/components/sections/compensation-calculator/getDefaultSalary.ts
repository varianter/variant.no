import {
  calculateSalary,
  getMaybeMaxYear,
} from "src/components/compensations/utils/salary";
import { Result } from "studio/utils/result";

import { SalaryData } from "./types";

const getDefaultSalary = (
  salaries: Result<SalaryData, unknown>,
  initialYear?: number,
): number => {
  return salaries.ok
    ? (calculateSalary(
        initialYear ?? getMaybeMaxYear(salaries) ?? new Date().getFullYear(),
        "master",
        salaries.value,
      ) ?? 0)
    : 0;
};

export default getDefaultSalary;
