import Link from "next/link";
import { useTranslations } from "next-intl";

import { SanityImage } from "src/components/image/SanityImage";
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
  const t = useTranslations("customer_case");

  return (
    featuredCases.length > 0 && (
      <div className={styles.wrapper}>
        <Text type={"h3"}>{t("featured_cases.projects")}</Text>
        <div className={styles.content}>
          {featuredCases.map((featuredCase) => (
            <div key={featuredCase._id} className={styles.caseWrapper}>
              <Link
                href={`/${[...customerCasesPath, featuredCase.slug].join("/")}`}
              >
                <div className={styles.caseImageWrapper}>
                  <SanityImage image={featuredCase.image} isShared />
                </div>
                <div>
                  <Text type={"bodyBig"}>{featuredCase.basicTitle}</Text>
                  <Text type={"bodySmall"}>{featuredCase.description}</Text>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
