"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { useState } from "react";

import styles from "src/advanced-calculator/calculator.module.css";
import RangeSlider from "src/advanced-calculator/Components/RangeSlider";
import PensionGraph from "src/advanced-calculator/Graphs/PensionGraph";
import { calculateSalary } from "src/components/compensations/utils/salary";
import { RichText } from "src/components/richText/RichText";
import {
  Degree,
  SalaryData,
} from "src/components/sections/compensation-calculator/types";
import Text from "src/components/text/Text";
import { Benefit } from "studio/lib/interfaces/compensations";
import { Result } from "studio/utils/result";

const DEFAULT_COMPARISON_SALARY = 600_000;
const MIN_SALARY = 500_000;
const MAX_SALARY = 1_500_000;

interface PensionProps {
  oneG: number;
  benefit: Benefit;
  salaries: Result<SalaryData, unknown>;
  initialSalaryYear: number;
}

export default function Pension({
  oneG,
  benefit,
  salaries,
  initialSalaryYear,
}: PensionProps) {
  const t = useTranslations("compensation");

  const [compareSalary, setCompareSalary] = useState<number>(
    DEFAULT_COMPARISON_SALARY,
  );

  const [comparePensionPercentage, setComparePensionPercentage] = useState({
    below7G: 5,
    above7G: 5,
  });

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

  const salary = salaries.ok
    ? (calculateSalary(
        year ?? initialSalaryYear,
        degree ?? "master",
        salaries.value,
      ) ?? 0)
    : 0;

  function differenceAbove7G(currentSalary: number) {
    const diff = currentSalary - oneG * 7.1;
    return Math.max(diff, 0);
  }

  function handleCompareSalaryChange(value: number) {
    setCompareSalary(value);
  }
  function handleCompareBelow7GPensionChange(value: number) {
    setComparePensionPercentage((prev) => ({ ...prev, below7G: value }));
  }
  function handleCompareAbove7GPensionChange(value: number) {
    setComparePensionPercentage((prev) => ({ ...prev, above7G: value }));
  }

  const above7GAmount = differenceAbove7G(compareSalary);
  const below7GAmount = compareSalary - above7GAmount;

  const pensionBelow7G = Math.floor(
    0.01 * comparePensionPercentage.below7G * below7GAmount,
  );
  const pensionAbove7G = Math.floor(
    0.01 * comparePensionPercentage.above7G * above7GAmount,
  );
  const totalComparisonPension = pensionBelow7G + pensionAbove7G;
  const comparisonPensionPercentage = (
    (totalComparisonPension * 100) /
    compareSalary
  ).toPrecision(2);

  return (
    <>
      <div className={styles.sectionText}>
        <Text type="titleL">{benefit.basicTitle}</Text>
        <RichText value={benefit.richText} />
      </div>

      <div className={styles.pensionControls}>
        <div className={styles.formWrapper}>
          <fieldset className={styles.formFieldset}>
            <Text type="titleXS">{t("pension.salaryAtCurrentEmployer")}</Text>
            <div className={styles.mobileInputWrapper}>
              <RangeSlider
                min={MIN_SALARY}
                max={MAX_SALARY}
                value={compareSalary}
                step={10_000}
                id="compareSalary"
                name={t("pension.salaryAtCurrentEmployer")}
                onChange={handleCompareSalaryChange}
                displayCurrency
              />

              {/* TODO: Its a bad idea to have a different input for mobile and
              pc. Find a better solution */}
              <input
                aria-label={t("pension.salaryAtCurrentEmployer")}
                id="compareSalary"
                className={styles.mobileInputNumber}
                name="compareSalary"
                type="number"
                size={MIN_SALARY.toString().length}
                maxLength={MAX_SALARY.toString().length}
                min={MIN_SALARY}
                max={MAX_SALARY}
                value={compareSalary}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value) handleCompareSalaryChange(parseInt(value, 10));
                }}
              />
            </div>
          </fieldset>

          <fieldset className={styles.formFieldset}>
            <Text type="titleXS">
              <legend>{t("pension.percentPension")}</legend>
            </Text>
            <RangeSlider
              min={2}
              max={7}
              step={1}
              value={comparePensionPercentage.below7G}
              id="comparePensionBelow7G"
              name={t("pension.percentPension")}
              onChange={handleCompareBelow7GPensionChange}
              displayPercentage
            />
          </fieldset>

          <fieldset className={styles.formFieldset}>
            <Text type="titleXS">
              <legend>{t("pension.IPS")}</legend>
            </Text>
            <RangeSlider
              min={2}
              max={25}
              step={1}
              value={comparePensionPercentage.above7G}
              id="comparePensionAbove7G"
              name={t("pension.IPS")}
              onChange={handleCompareAbove7GPensionChange}
              disabled={compareSalary < oneG * 7.1}
              displayPercentage
            />
          </fieldset>

          <a
            className={styles.ips}
            href="https://www.finansportalen.no/pensjon/hva-er-innskuddspensjon/"
          >
            {t("pension.whatIsIPS")}
          </a>
        </div>

        <input
          aria-label={t("pension.salaryAtCurrentEmployer")}
          id="compareSalary"
          className={styles.inputNumber}
          name="compareSalary"
          type="number"
          size={MIN_SALARY.toString().length}
          maxLength={MAX_SALARY.toString().length}
          min={MIN_SALARY}
          max={MAX_SALARY}
          value={compareSalary}
          onChange={(event) => {
            const value = event.target.value;
            if (value) handleCompareSalaryChange(parseInt(value, 10));
          }}
        />
      </div>

      <PensionGraph
        data={[
          {
            text: "Variant, 7%",
            num: salary * 0.07,
            color: "var(--surface-violet-vivid)",
            position: "right",
          },
          {
            text: `${t("pension.comparison")}, ${comparisonPensionPercentage}%`,
            num: totalComparisonPension,
            color: "var(--surface-violet-light)",
            position: "right",
          },
        ]}
      />
    </>
  );
}
