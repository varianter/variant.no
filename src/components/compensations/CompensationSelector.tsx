"use client";

import { SalaryData } from "src/components/sections/compensation-calculator/types";
import { YearlySalaries } from "studio/lib/interfaces/compensations";
import { ResultError, ResultOk } from "studio/utils/result";

import Benefits from "./components/benefits/Benefits";
import { useLocationContext } from "./LocationContext";

export default function CompensationSelector() {
  const ctx = useLocationContext();
  if (!ctx) return null;

  const { initialSalaryYear, salaryData } = deriveLatestSalaryData(
    ctx.yearlySalariesForLocation,
  );

  return (
    <Benefits
      benefits={ctx.benefitsForLocation}
      yearlyBonusesForLocation={ctx.yearlyBonusesForLocation}
      yearlySalaries={ctx.yearlySalariesForLocation}
      salaryData={salaryData}
      initialSalaryYear={initialSalaryYear}
    />
  );
}

function deriveLatestSalaryData(yearlySalaries: YearlySalaries[]) {
  if (yearlySalaries.length === 0) {
    return {
      initialSalaryYear: new Date().getFullYear(),
      salaryData: ResultError<SalaryData, unknown>("No salary data"),
    };
  }

  const latestEntry = yearlySalaries[yearlySalaries.length - 1];
  const initialSalaryYear = latestEntry.year;

  try {
    const parsed = JSON.parse(latestEntry.salaries) as SalaryData;
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
