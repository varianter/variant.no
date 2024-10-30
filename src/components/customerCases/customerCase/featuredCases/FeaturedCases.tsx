import Link from "next/link";

import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";

import styles from "./featuredCases.module.css";

export interface FeaturedCasesProps {
  featuredCases: CustomerCaseBase[];
  customerCasesPath: string[];
}

export default function FeaturedCases({
  featuredCases,
  customerCasesPath,
}: FeaturedCasesProps) {
  return (
    featuredCases.length > 0 && (
      <div className={styles.wrapper}>
        <Text type={"h3"}>Lignende prosjekter</Text>
        <div className={styles.content}>
          {featuredCases.map((featuredCase) => (
            <div key={featuredCase._id} className={styles.caseWrapper}>
              <div className={styles.caseImageWrapper}>
                <SanitySharedImage image={featuredCase.image} />
              </div>
              <div>
                <Link
                  href={`/${[...customerCasesPath, featuredCase.slug].join("/")}`}
                >
                  <Text type={"bodyBig"}>{featuredCase.basicTitle}</Text>
                </Link>
                <Text type={"bodySmall"}>{featuredCase.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
