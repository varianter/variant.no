import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import {
  Benefit,
  BenefitTypeEnum,
  BonusPage,
  SalariesByLocation,
} from "studio/lib/interfaces/compensations";

import styles from "./benefitsByLocation.module.css";
import BonusSection from "./BonusSection";
import PensionSection from "./PensionSection";
import SalarySection from "./SalarySection";

interface BenefitsByLocationProps {
  benefits: Benefit[];
  yearlyBonusesForLocation?: BonusPage[];
  yearlySalaryForLocation?: SalariesByLocation;
}

export default function BenefitsByLocation({
  benefits,
  yearlyBonusesForLocation,
  yearlySalaryForLocation,
}: BenefitsByLocationProps) {
  return (
    <>
      {benefits.map((benefit: Benefit) => {
        let content;
        switch (benefit.benefitType) {
          case BenefitTypeEnum.Bonus:
            content = (
              <BonusSection
                benefit={benefit}
                yearlyBonusesForLocation={yearlyBonusesForLocation}
              />
            );
            break;
          case BenefitTypeEnum.Pension:
            content = <PensionSection benefit={benefit} />;
            break;
          case BenefitTypeEnum.Salary:
            content = (
              <SalarySection
                benefit={benefit}
                yearlySalaryForLocation={yearlySalaryForLocation}
              />
            );
            break;
          default:
            content = (
              <div>
                <Text type="h2">{benefit.basicTitle}</Text>
                <RichText value={benefit.richText} />
              </div>
            );
        }

        return (
          <div key={benefit._key} className={styles.benefitWrapper}>
            {content}
          </div>
        );
      })}
    </>
  );
}
