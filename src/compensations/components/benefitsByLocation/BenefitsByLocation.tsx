import { Benefit } from "studio/lib/payloads/compensations";
import Text from "src/components/text/Text";
import { RichText } from "src/components/richText/RichText";
import styles from "./benefitsByLocation.module.css";

interface BenefitsByLocationProps {
  locationId: string;
  benefits?: Benefit[] | any;
}

export default function BenefitsByLocation({
  locationId,
  benefits,
}: BenefitsByLocationProps) {
  const selectedBenefitsGroup =
    benefits.find((location: any) => location.location._ref === locationId)
      ?.benefitsGroup || [];

  return (
    <div className={styles.benefits}>
      {selectedBenefitsGroup.map((benefit: Benefit) => (
        <div key={benefit._key} className={styles.benefitWrapper}>
          <Text type="h2">{benefit.basicTitle}</Text>
          <RichText value={benefit.richText} />
        </div>
      ))}
    </div>
  );
}
