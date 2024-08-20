import styles from "./salaryAndBenefits.module.css";
import Text from "src/components/text/Text";
import {SalaryAndBenefits as SalaryAndBenefitsPayload} from "studio/lib/payloads/salaryAndBenefits";
import Benefit from './components/benefit/Benefit';

interface SalaryAndBenefitsProps {
  salaryAndBenefits: SalaryAndBenefitsPayload
}

const SalaryAndBenefits = ({salaryAndBenefits}: SalaryAndBenefitsProps) => {
  return (
    <div className={styles.wrapper}>
      <Text type={"h1"}>{salaryAndBenefits.basicTitle}</Text>
      <section className={styles.benefits}>
        {salaryAndBenefits.benefits.map((benefit) => (
          <Benefit key={benefit._key} benefit={benefit} />
        ))}
      </section>
    </div>
  )
}

export default SalaryAndBenefits;