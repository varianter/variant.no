import { Suspense } from "react";

import Text from "src/components/text/Text";
import { cnIf } from "src/utils/css";
import {
  CompensationCalculatorBackground,
  CompensationCalculatorSection,
} from "studio/lib/interfaces/pages";

import { getLatestSalaries, getLocale } from "./api";
import Calculator from "./Calculator";
import styles from "./compensation-calculator.module.css";

export interface CompensationCalculatorProps {
  section: CompensationCalculatorSection;
}

export default async function CompensationCalculator({
  section,
}: CompensationCalculatorProps) {
  const salariesRes = getLatestSalaries();
  const localeRes = getLocale();

  const calculatorBgClassname = getCalculatorBgClassname(section.background);
  const radioBackground = getRadioBackground(section.background);

  return (
    <div className={styles.container}>
      {section.moduleTitle && <Text type="titleL">{section.moduleTitle}</Text>}
      <div className={styles.grid}>
        <div className={calculatorBgClassname}>
          <Text type="titleM">{section.calculatorBlock.calculatorTitle}</Text>
          <Text type="bodyBig">
            {section.calculatorBlock.calculatorDescription}
          </Text>

          <Suspense fallback={<div>Loading...</div>}>
            <Calculator
              localeRes={localeRes}
              salariesRes={salariesRes}
              background={radioBackground}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function getCalculatorBgClassname(
  background: CompensationCalculatorBackground,
) {
  return cnIf({
    [styles.calculator]: true,
    [styles.calculatorViolet]: background === "violet",
  });
}

function getRadioBackground(background: CompensationCalculatorBackground) {
  return background === "violet" ? "light" : "dark";
}
