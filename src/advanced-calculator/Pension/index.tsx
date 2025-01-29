import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { useState } from "react";

import styles from "src/advanced-calculator/calculator.module.css";
import RangeSlider from "src/advanced-calculator/Components/RangeSlider";
import PensionGraph from "src/advanced-calculator/Graphs/PensionGraph";
import Text from "src/components/text/Text";

export default function Pension({ oneG }: { oneG: number }) {
  const [compareSalary, setCompareSalary] = useState(600000);
  const [comparePensionPercentage, setComparePensionChange] = useState({
    below7G: 5,
    above7G: 5,
  });

  const [salary] = useQueryState<number | null>("salary", {
    //TODO: Do not hardcode this, find a better solution
    // This will break once the default salary is changed in the calculator
    defaultValue: 600000,
    parse: (value) => (value ? parseFloat(value) : null),
    serialize: (value) => (value ? value.toString() : ""),
  });

  const sevenG = oneG * 7.1;

  function differenceWhenGreaterThan7G(salary: number) {
    const difference = Math.floor(salary - sevenG);
    return Math.sign(difference) > 0 ? difference : 0;
  }

  function handleOnCompareSalaryChange(value: number) {
    setCompareSalary(value);
  }

  function handleOnCompareBelow7GPensionChange(value: number) {
    setComparePensionChange({ ...comparePensionPercentage, below7G: value });
  }

  function handleOnCompareAbove7GPensionChange(value: number) {
    setComparePensionChange({ ...comparePensionPercentage, above7G: value });
  }

  const salaryBelow7G =
    compareSalary - differenceWhenGreaterThan7G(compareSalary);

  const pensionBelow7G = Math.floor(
    0.01 * comparePensionPercentage.below7G * salaryBelow7G,
  );

  const pensionAbove7G = Math.floor(
    0.01 *
      comparePensionPercentage.above7G *
      differenceWhenGreaterThan7G(compareSalary),
  );

  const minSalary = 500000;
  const maxSalary = 1500000;

  const t = useTranslations("compensation");

  return (
    <>
      <div className={styles.pensionControls}>
        <div className={styles.formWrapper}>
          <fieldset className={styles.formFieldset}>
            <Text type="h5" className={styles.rangeSliderTitle}>
              {t("pension.salaryAtCurrentEmployer")}
            </Text>
            <div className={styles.mobileInputWrapper}>
              <RangeSlider
                min={minSalary}
                max={maxSalary}
                value={compareSalary}
                step={10000}
                id={"compareSalary"}
                name={t("pension.salaryAtCurrentEmployer")}
                onChange={handleOnCompareSalaryChange}
                displayCurrency
              />
              {/* TODO: Its a bad idea to have a different input for mobile and
              pc. Find a better solution */}
              <input
                aria-label={t("pension.salaryAtCurrentEmployer")}
                id={"compareSalary"}
                className={styles.mobileInputNumber}
                name={"compareSalary"}
                type="number"
                size={minSalary.toString().length}
                maxLength={maxSalary.toString().length}
                min={minSalary}
                max={maxSalary}
                value={compareSalary}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const value = event.target.value;
                  if (value) handleOnCompareSalaryChange(parseInt(value, 10));
                }}
              />
            </div>
          </fieldset>

          <fieldset className={styles.formFieldset}>
            <Text type="h5" className={styles.rangeSliderTitle}>
              <legend>{t("pension.percentPension")}</legend>
            </Text>
            <RangeSlider
              min={2}
              max={7}
              value={comparePensionPercentage.below7G}
              step={1}
              id={"comparePensionBelow7G"}
              name={t("pension.percentPension")}
              onChange={handleOnCompareBelow7GPensionChange}
              displayPercentage
            />
          </fieldset>

          <fieldset className={styles.formFieldset}>
            <Text type="h5" className={styles.rangeSliderTitle}>
              <legend>{t("pension.IPS")}</legend>
            </Text>
            <RangeSlider
              min={2}
              max={25}
              value={comparePensionPercentage.above7G}
              step={1}
              id={"comparePensionAbove7G"}
              name={t("pension.IPS")}
              onChange={handleOnCompareAbove7GPensionChange}
              disabled={compareSalary < sevenG}
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
          id={"compareSalary"}
          className={styles.inputNumber}
          name={"compareSalary"}
          type="number"
          size={minSalary.toString().length}
          maxLength={maxSalary.toString().length}
          min={minSalary}
          max={maxSalary}
          value={compareSalary}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            if (value) handleOnCompareSalaryChange(parseInt(value, 10));
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
            text: `${t("pension.comparison")}, ${(
              ((pensionBelow7G + pensionAbove7G) * 100) /
              compareSalary
            ).toPrecision(2)}%`,
            num: pensionBelow7G + pensionAbove7G,
            color: "var(--surface-violet-light)",
            position: "right",
          },
        ]}
      />
    </>
  );
}
