import { useTranslations } from "next-intl";

import { IOption } from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import { SalaryData } from "src/components/sections/compensation-calculator/types";
import { Result } from "studio/utils/result";

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
