"use client";
import { use } from "react";

import { useOneG } from "src/advanced-calculator/use-g";
import { getMaybeMaxYear } from "src/components/compensations/utils/salary";
import { RichText } from "src/components/richText/RichText";
import { SalaryData } from "src/components/sections/compensation-calculator/types";
import Text from "src/components/text/Text";
import {
  Benefit,
  BenefitTypeEnum,
  BonusPage,
  SalariesByLocation,
} from "studio/lib/interfaces/compensations";
import { Result } from "studio/utils/result";

import styles from "./benefits.module.css";
import BonusSection from "./BonusSection";
import PensionSection from "./PensionSection";
import SalarySection from "./SalarySection";

interface BenefitsProps {
  benefits: Benefit[];
  yearlyBonusesForLocation?: BonusPage[];
  yearlySalaryForLocation?: SalariesByLocation;
  salariesRes: Promise<Result<SalaryData, unknown>>;
}

export default function Benefits({
  benefits,
  yearlyBonusesForLocation,
  yearlySalaryForLocation,
  salariesRes,
}: BenefitsProps) {
  const salaries = use(salariesRes);
  //Grunnbeløp
  const oneG = useOneG();

  const initialSalaryYear =
    getMaybeMaxYear(salaries) ?? new Date().getFullYear();

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
            salaries={salaries}
            initialSalaryYear={initialSalaryYear}
            oneG={oneG}
          />
        );

      case BenefitTypeEnum.Salary:
        return (
          <SalarySection
            benefit={benefit}
            yearlySalaryForLocation={yearlySalaryForLocation}
            initialSalaryYear={initialSalaryYear}
          />
        );

      default:
        return (
          <div>
            <Text type="h2">{benefit.basicTitle}</Text>
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
