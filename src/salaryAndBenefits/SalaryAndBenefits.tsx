import styles from "./salaryAndBenefits.module.css";
import Text from "src/components/text/Text";
import { SalaryAndBenefits as SalaryAndBenefitsPayload } from "studio/lib/payloads/salaryAndBenefits";
import { RichText } from "src/components/richText/RichText";

interface SalaryAndBenefitsProps {
  salaryAndBenefits: SalaryAndBenefitsPayload;
}

const SalaryAndBenefits = ({ salaryAndBenefits }: SalaryAndBenefitsProps) => {
  return (
    <div className={styles.wrapper}>
      <Text type="h1">{salaryAndBenefits.basicTitle}</Text>
      <div className={styles.benefits}>
        {salaryAndBenefits.benefits.map((benefit) => (
          <div key={benefit._key} className={styles.benefitWrapper}>
            <Text type="h2">{benefit.basicTitle}</Text>
            <RichText value={benefit.richText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryAndBenefits;
