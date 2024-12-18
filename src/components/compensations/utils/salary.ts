import { SalariesByLocation } from "studio/lib/interfaces/compensations";
import { Result, ResultError, ResultOk } from "studio/utils/result";

export function calculateSalary(
  examinationYear: number,
  degree: string,
  salaries: Salaries,
): number | undefined {
  const adjustedYear =
    degree == "master" ? examinationYear - 1 : examinationYear;
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

/**
 * Retrieves salary data for a specific location and year.
 *
 * @param year - The year for which to retrieve salary data.
 * @param locationId - The string from the `_ref` property of a location reference used in the salaries object.
 * @param salariesByLocation - An array of salary data organized by location.
 * @returns A Result containing either the Salaries object or an error message.
 *
 * @remarks
 * This function searches for salary data based on the provided location and year.
 * The locationId should match the _ref property of a location reference in the salariesByLocation array.
 * If the data is found and valid, it returns a ResultOk with the parsed Salaries object.
 * If the data is not found or invalid, it returns a ResultError with an appropriate error message.
 */
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

interface Salaries {
  [year: string]: number;
}

function isSalariesType(value: unknown): value is Salaries {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.entries(value).every(
      ([k, v]) => !isNaN(Number(k)) && typeof v === "number",
    )
  );
}
