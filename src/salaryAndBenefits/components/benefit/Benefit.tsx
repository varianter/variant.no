import Text from "src/components/text/Text";
import { RichText } from '../../../components/richText/RichText';
import {Benefit as BenefitPayload} from 'studio/lib/payloads/salaryAndBenefits';
import styles from "./benefit.module.css";


interface BenefitProps {
  benefit: BenefitPayload;
}

export default function Benefit({benefit}: BenefitProps) {
  return (
    <div className={styles.wrapper}>
      <Text type={"h2"}>{benefit.basicTitle}</Text>
      <RichText value={benefit.richText} />
    </div>
  )
}