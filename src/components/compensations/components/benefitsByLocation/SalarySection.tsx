"use client";

import { useQueryState } from "nuqs";
import React from "react";

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
import {
  Benefit,
  SalariesByLocation,
  SalariesPage,
} from "studio/lib/interfaces/compensations";

import styles from "./benefitsByLocation.module.css";

function transformToPayscaleFormat(
  yearlySalaries: SalariesPage[],
): HistoricalPayscaleData {
  return yearlySalaries.reduce((payscaleData, { year, salaries }) => {
    const parsedSalaries = JSON.parse(salaries) as SalaryData;
    payscaleData[year.toString()] = Object.fromEntries(
      Object.entries(parsedSalaries).map(([expYear, salary]) => [
        expYear,
        salary.toString(),
      ]),
    );
    return payscaleData;
  }, {} as HistoricalPayscaleData);
}

interface SalarySectionProps {
  benefit: Benefit;
  yearlySalaryForLocation?: SalariesByLocation;
}

const SalarySection = ({
  benefit,
  yearlySalaryForLocation,
}: SalarySectionProps) => {
  const [year] = useQueryState<number | null>("year", {
    //TODO: Do not hardcode this, find a better solution
    // This will break once the default year is changed in the calculator
    defaultValue: 2023,
    parse: (value) => (value ? parseInt(value, 10) : null),
    serialize: (value) => (value ? value.toString() : ""),
  });

  const [degree] = useQueryState<Degree>("degree", {
    defaultValue: "master",
    parse: (value) => (value as Degree) ?? null,
    serialize: (value) => value ?? "",
  });

  // Safely extract yearlySalaries
  const yearlySalaries = yearlySalaryForLocation?.yearlySalaries ?? [];

  const transformedPayscale = transformToPayscaleFormat(yearlySalaries);

  const payscale = getPayscale(
    getAdjustedYear(year, degree),
    transformedPayscale,
  );

  return (
    <>
      <div className={styles.sectionText}>
        <Text type="h2">{benefit.basicTitle}</Text>
        <RichText value={benefit.richText} />
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <SalaryGraphParent payscale={payscale} />
      </div>
    </>
  );
};

export default SalarySection;
