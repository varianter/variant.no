import Link from "next/link";
import { Suspense } from "react";

import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { getHref } from "src/utils/link";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import { loadStudioQuery } from "studio/lib/store";

import { getHandbookLinksFromCompensationPage, getSalaryByYear } from "./api";
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
  const salariesRes = getSalaryByYear(2024, language);
  const localeRes = loadStudioQuery<LocaleDocument>(LOCALE_QUERY).then(
    (d) => d.data,
  );
  const handbookLinksRes = await getHandbookLinksFromCompensationPage(language);

  // TODO: add cn util or andIf
  const calculatorBgClassname =
    section.background === "violet"
      ? `${styles.calculator} ${styles["calculator--violet"]}`
      : styles.calculator;
  const handbookBgClassname =
    section.background === "violet"
      ? `${styles.handbook} ${styles["handbook--violet"]}`
      : styles.handbook;

  return (
    <div>
      <Text type="h2">{section.moduleTitle}</Text>

      <div className={styles.grid}>
        <div className={calculatorBgClassname}>
          <Text type="h3">{section.calculatorBlock.calculatorTitle}</Text>
          <Text type="bodyBig">
            {section.calculatorBlock.calculatorDescription}
          </Text>

          <Suspense fallback={<div>Loading...</div>}>
            <Calculator
              localeRes={localeRes}
              salariesRes={salariesRes}
              initialYear={2024}
              initialDegree={"master"}
            />
          </Suspense>

          {section.calculatorBlock.calculatorLink && (
            <LinkButton link={section.calculatorBlock.calculatorLink} />
          )}

          {section.calculatorBlock.calculatorLink && (
            <div className={styles.calculatorLink}>
              <LinkButton
                type="secondary"
                link={section.calculatorBlock.calculatorLink}
              />
            </div>
          )}
        </div>
        <div className={handbookBgClassname}>
          <Text type="h3">{section.handbookBlock.handbookTitle}</Text>
          <Text type="bodyBig">
            {section.handbookBlock.handbookDescription}
          </Text>

          {handbookLinksRes.ok && (
            <div className={styles.handbookLinks}>
              {handbookLinksRes.value.map((link) => (
                <Link
                  key={link._key}
                  className={styles.handbookLink}
                  href={getHref(link)}
                >
                  {link.linkTitle}
                </Link>
              ))}
            </div>
          )}

          {section.handbookBlock.handbookLink && (
            <div className={styles.handbookLink}>
              <LinkButton
                type="secondary"
                link={section.handbookBlock.handbookLink}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
