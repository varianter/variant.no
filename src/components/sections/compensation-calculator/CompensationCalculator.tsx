import Link from "next/link";
import { Suspense } from "react";

import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { cnIf } from "src/utils/css";
import { getHref } from "src/utils/link";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";

import {
  getHandbookLinksFromCompensationPage,
  getLatestSalaries,
  getLocale,
} from "./api";
import Calculator from "./Calculator";
import styles from "./compensation-calculator.module.css";

export interface CompensationCalculatorProps {
  language: string;
  section: CompensationCalculatorSection;
}

export default async function CompensationCalculator({
  section,
  language,
}: CompensationCalculatorProps) {
  const salariesRes = getLatestSalaries();
  const localeRes = getLocale();

  const handbookLinksRes = await getHandbookLinksFromCompensationPage(language);

  const calculatorBgClassname = cnIf({
    [styles.calculator]: true,
    [styles["calculator--violet"]]: section.background === "violet",
  });
  const handbookBgClassname = cnIf({
    [styles.handbook]: true,
    [styles["handbook--violet"]]: section.background === "violet",
  });

  const radioBackground = section.background === "violet" ? "light" : "dark";

  return (
    <div className={styles.container}>
      <Text type="h2">{section.moduleTitle}</Text>

      <div className={styles.grid}>
        <div className={calculatorBgClassname}>
          <Text type="h3">{section.calculatorBlock.calculatorTitle}</Text>
          <Text type="bodyBig" className={styles.lightFont}>
            {section.calculatorBlock.calculatorDescription}
          </Text>

          <Suspense fallback={<div>Loading...</div>}>
            <Calculator
              localeRes={localeRes}
              salariesRes={salariesRes}
              initialDegree="master"
              background={radioBackground}
            />
          </Suspense>

          {section.calculatorBlock.calculatorLink?.linkTitle && (
            <div className={styles.calculatorBottomLink}>
              <LinkButton
                type="secondary"
                background={
                  section.background === "violet" ? undefined : "dark"
                }
                link={section.calculatorBlock.calculatorLink}
              />
            </div>
          )}
        </div>
        <div className={handbookBgClassname}>
          <Text type="h3">{section.handbookBlock.handbookTitle}</Text>
          <Text type="bodyBig" className={styles.lightFont}>
            {section.handbookBlock.handbookDescription}
          </Text>

          {handbookLinksRes.ok && (
            <ul className={styles.handbookLinks}>
              {handbookLinksRes.value.map((link) => (
                <li key={link._key}>
                  <Link className={styles.handbookLink} href={getHref(link)}>
                    {link.linkTitle}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {section.handbookBlock.handbookLink?.linkTitle && (
            <div className={styles.handbookBottomLink}>
              <LinkButton
                type="secondary"
                background={
                  section.background === "violet" ? "dark" : undefined
                }
                link={section.handbookBlock.handbookLink}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
