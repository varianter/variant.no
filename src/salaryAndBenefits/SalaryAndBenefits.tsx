import styles from "./salaryAndBenefits.module.css";
import Text from "src/components/text/Text";
import {SalaryAndBenefits as SalaryAndBenefitsPayload} from "studio/lib/payloads/salaryAndBenefits";

interface SalaryAndBenefitsProps {
  salaryAndBenefits: SalaryAndBenefitsPayload
}

const SalaryAndBenefits = ({salaryAndBenefits}: SalaryAndBenefitsProps) => {
  return (
    <section className={styles.wrapper}>
      <Text type={"bodySuperLarge"}>💰❤️</Text>
      <Text type={"bodySuperLarge"}>{salaryAndBenefits.basicTitle}</Text>
    </section>
  )
}

export default SalaryAndBenefits;