import Text from "src/components/text/Text";
import { RichText } from "src/components/richText/RichText";
import styles from "./benefitsByLocation.module.css";
import { Benefit } from "studio/lib/interfaces/compensations";

interface BenefitsByLocationProps {
  benefits: Benefit[];
}

export default function BenefitsByLocation({
  benefits,
}: BenefitsByLocationProps) {
  return (
    <div className={styles.benefits}>
      {benefits.map((benefit: Benefit) => (
        <div key={benefit._key} className={styles.benefitWrapper}>
          <Text type="h2">{benefit.basicTitle}</Text>
          <RichText value={benefit.richText} />
        </div>
      ))}
    </div>
  );
}
