"use client";

import Benefits from "./components/benefits/Benefits";
import { useLocationContext } from "./LocationContext";
import { getLatestSalaryResult } from "./utils/salary";

export default function CompensationSelector() {
  const ctx = useLocationContext();
  if (!ctx) return null;

  const { initialSalaryYear, salaryData } = getLatestSalaryResult(
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
