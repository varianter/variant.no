import { useTranslations } from "next-intl";

import { IOption } from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { SalaryData } from "src/components/sections/compensation-calculator/types";
import { YearlySalaries } from "studio/lib/interfaces/compensations";
import { Result, ResultError, ResultOk } from "studio/utils/result";

export function getAdjustedYear(
  examinationYear: number,
  degree: string,
): number {
  return degree === "master" ? examinationYear : examinationYear + 1;
}

export function calculateSalary(
  examinationYear: number,
  degree: string,
  salaries: Salaries,
): number | undefined {
  const adjustedYear =
    degree == "master" ? examinationYear : examinationYear + 1;
  return salaries[adjustedYear];
}

interface Salaries {
  [year: string]: number;
}

export function getMinMaxYear(salaries: SalaryData) {
  const years = Object.keys(salaries).map((s) => parseInt(s));
  const min = Math.min(...years);
  // We subtract 1 because we don't have data for the current year
  const max = Math.max(...years) - 1;
  return { min, max };
}

export function getDegreeOptions(
  t: ReturnType<typeof useTranslations>,
): IOption[] {
  return [
    { id: "bachelor", label: t("degreeOptions.bachelor") },
    { id: "master", label: t("degreeOptions.master") },
  ];
}

export function getMaybeMaxYear(salaries: Result<SalaryData, unknown>) {
  if (!salaries.ok) return undefined;
  const years = Object.keys(salaries.value).map((s) => parseInt(s));
  // We subtract 1 because we don't have data for the current year
  return Math.max(...years) - 1;
}

function isSalariesType(value: unknown): value is SalaryData {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.entries(value).every(
      ([k, v]) => !isNaN(Number(k)) && typeof v === "number",
    )
  );
}

export function getLatestSalaryResult(yearlySalaries: YearlySalaries[]): {
  initialSalaryYear: number;
  salaryData: Result<SalaryData, unknown>;
} {
  if (yearlySalaries.length === 0) {
    return {
      initialSalaryYear: new Date().getFullYear(),
      salaryData: ResultError<SalaryData, unknown>("No salary data"),
    };
  }

  const latestEntry = yearlySalaries[yearlySalaries.length - 1];
  const initialSalaryYear = latestEntry.year;

  try {
    const parsed: unknown = JSON.parse(latestEntry.salaries);
    if (!isSalariesType(parsed)) {
      return {
        initialSalaryYear,
        salaryData: ResultError<SalaryData, unknown>(
          "Parsed salaries data was not valid",
        ),
      };
    }
    return {
      initialSalaryYear,
      salaryData: ResultOk<SalaryData, unknown>(parsed),
    };
  } catch {
    return {
      initialSalaryYear,
      salaryData: ResultError<SalaryData, unknown>(
        "Failed to parse salary data",
      ),
    };
  }
}
