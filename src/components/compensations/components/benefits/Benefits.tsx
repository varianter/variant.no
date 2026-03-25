"use client";

import { useOneG } from "src/advanced-calculator/use-g";
import { RichText } from "src/components/richText/RichText";
import { SalaryData } from "src/components/sections/compensation-calculator/types";
import Text from "src/components/text/Text";
import {
  Benefit,
  BenefitTypeEnum,
  BonusPage,
  YearlySalaries,
} from "studio/lib/interfaces/compensations";
import { Result } from "studio/utils/result";

import styles from "./benefits.module.css";
import BonusSection from "./BonusSection";
import PensionSection from "./PensionSection";
import SalarySection from "./SalarySection";

interface BenefitsProps {
  benefits: Benefit[];
  yearlyBonusesForLocation?: BonusPage[];
  yearlySalaries: YearlySalaries[];
  salaryData: Result<SalaryData, unknown>;
  initialSalaryYear: number;
}

export default function Benefits({
  benefits,
  yearlyBonusesForLocation,
  yearlySalaries,
  salaryData,
  initialSalaryYear,
}: BenefitsProps) {
  //Grunnbeløp
  const oneG = useOneG();

  function renderBenefit(benefit: Benefit) {
    switch (benefit.benefitType) {
      case BenefitTypeEnum.Bonus:
        return (
          <BonusSection
            benefit={benefit}
            yearlyBonusesForLocation={yearlyBonusesForLocation}
          />
        );

      case BenefitTypeEnum.Pension:
        return (
          <PensionSection
            benefit={benefit}
            salaries={salaryData}
            initialSalaryYear={initialSalaryYear}
            oneG={oneG}
          />
        );

      case BenefitTypeEnum.Salary:
        return (
          <SalarySection
            benefit={benefit}
            yearlySalaries={yearlySalaries}
            initialSalaryYear={initialSalaryYear}
          />
        );

      default:
        return (
          <div>
            <Text type="titleL">{benefit.basicTitle}</Text>
            <RichText value={benefit.richText} />
          </div>
        );
    }
  }

  return (
    <>
      {benefits?.map((benefit) => (
        <div key={benefit._key} className={styles.benefitWrapper}>
          {renderBenefit(benefit)}
        </div>
      ))}
    </>
  );
}
