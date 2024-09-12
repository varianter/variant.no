import {
  isSalariesType,
  Salaries,
} from "studio/components/salariesInput/utils/parseSalaries";
import { SalariesByLocation } from "../../../studio/lib/payloads/compensations";
import { Result, ResultError, ResultOk } from "../../../studio/utils/result";

export function calculateSalary(
  examinationYear: number,
  degree: string,
  salaries: Salaries,
): number | undefined {
  const degreeValue = degree === "bachelor" ? 1 : 0;
  const adjustedYear = examinationYear + degreeValue;
  return salaries[adjustedYear];
}

export function calculatePension(
  salary: number,
  pensionPercent: number,
): number {
  return Math.round(salary * (pensionPercent / 100));
}

function examinationYearsFromSalaries(salaries: Salaries) {
  return Object.keys(salaries).map(Number);
}

export function minSalariesExaminationYear(salaries: Salaries): number {
  return Math.min(...examinationYearsFromSalaries(salaries));
}

export function maxSalariesExaminationYear(salaries: Salaries): number {
  return Math.max(...examinationYearsFromSalaries(salaries));
}

export function salariesFromLocation(
  year: number,
  locationId: string,
  salariesByLocation: SalariesByLocation[],
): Result<Salaries, string> {
  const yearlySalaries = salariesByLocation.find(
    (salary) => salary.location._ref === locationId,
  )?.yearlySalaries;
  if (yearlySalaries === undefined) {
    return ResultError(`Could not find salaries for location '${locationId}'`);
  }
  const salariesData = yearlySalaries.find((s) => s.year === year);
  if (salariesData === undefined) {
    return ResultError(`Could not find salaries for year ${year}`);
  }
  const parsedSalaries = JSON.parse(salariesData.salaries);
  if (!isSalariesType(parsedSalaries)) {
    return ResultError("Parsed salaries data was not valid");
  }
  return ResultOk(parsedSalaries);
}
