import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";

import styles from "./featuredCases.module.css";

export interface FeaturedCasesProps {
  featuredCases: CustomerCaseBase[];
}

export default function FeaturedCases({ featuredCases }: FeaturedCasesProps) {
  return (
    <div className={styles.wrapper}>
      <Text type={"h3"}>Lignende prosjekter</Text>
      <div className={styles.content}>
        {featuredCases.map((featuredCase) => (
          <div key={featuredCase._id} className={styles.caseWrapper}>
            <div className={styles.caseImageWrapper}>
              <SanitySharedImage image={featuredCase.image} />
            </div>
            <div>
              <Text type={"bodyBig"}>{featuredCase.basicTitle}</Text>
              <Text type={"bodySmall"}>{featuredCase.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
