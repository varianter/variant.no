"use client";

import { useQueryState } from "nuqs";

import SalaryGraphParent from "src/advanced-calculator/Graphs/SalaryGraph";
import getPayscale, {
  HistoricalPayscaleData,
} from "src/advanced-calculator/helpers/getPayscale";
import { getAdjustedYear } from "src/components/compensations/utils/salary";
import { RichText } from "src/components/richText/RichText";
import {
  Degree,
  SalaryData,
} from "src/components/sections/compensation-calculator/types";
import Text from "src/components/text/Text";
import { Benefit, YearlySalaries } from "studio/lib/interfaces/compensations";

import styles from "./benefits.module.css";

interface SalarySectionProps {
  benefit: Benefit;
  yearlySalaries: YearlySalaries[];
  initialSalaryYear: number;
}

export default function SalarySection({
  benefit,
  yearlySalaries,
  initialSalaryYear,
}: SalarySectionProps) {
  const [year] = useQueryState<number | null>("year", {
    defaultValue: initialSalaryYear,
    parse: (value) => (value ? parseInt(value, 10) : null),
    serialize: (value) => (value ? value.toString() : ""),
  });

  const [degree] = useQueryState<Degree>("degree", {
    defaultValue: "master",
    parse: (value) => (value as Degree) ?? null,
    serialize: (value) => value ?? "",
  });

  if (yearlySalaries.length === 0) return null;

  // Convert the year/salaries list into a HistoricalPayscaleData structure
  const payscaleData = convertYearlySalariesToPayscale(yearlySalaries);

  // Calculate the payscale for the chosen year and degree
  const adjustedYear = getAdjustedYear(year, degree);
  const payscale = getPayscale(adjustedYear, payscaleData);

  return (
    <>
      <div className={styles.sectionText}>
        <Text type="titleL">{benefit.basicTitle}</Text>
        <RichText value={benefit.richText} />
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <SalaryGraphParent payscale={payscale} />
      </div>
    </>
  );
}

function convertYearlySalariesToPayscale(
  yearlySalaries: YearlySalaries[],
): HistoricalPayscaleData {
  return yearlySalaries.reduce<HistoricalPayscaleData>(
    (acc, { year, salaries }) => {
      const parsedSalaries = JSON.parse(salaries) as SalaryData;
      acc[year.toString()] = Object.fromEntries(
        Object.entries(parsedSalaries).map(([expYear, salary]) => [
          expYear,
          salary.toString(),
        ]),
      );
      return acc;
    },
    {},
  );
}
