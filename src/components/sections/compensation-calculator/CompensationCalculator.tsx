import Link from "next/link";
import { Suspense } from "react";

import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { cnIf } from "src/utils/css";
import { getHref } from "src/utils/link";
import { ILink } from "studio/lib/interfaces/navigation";
import { CompensationCalculatorSection } from "studio/lib/interfaces/pages";
import { CompensationCalculatorBackground } from "studio/schemas/objects/sections/compensation-calculator";

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

  const calculatorBgClassname = cnIf({
    [styles.calculator]: true,
    [styles["calculator--violet"]]: section.background === "violet",
  });

  const radioBackground = section.background === "violet" ? "light" : "dark";

  return (
    <div className={styles.container}>
      {section.moduleTitle && <Text type="h2">{section.moduleTitle}</Text>}

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
        <Handbook
          title={section.handbookBlock.handbookTitle}
          description={section.handbookBlock.handbookDescription}
          language={language}
          link={section.handbookBlock.handbookLink}
          sectionBackground={section.background}
        />
      </div>
    </div>
  );
}

export async function Handbook({
  title,
  description,
  language,
  link,
  sectionBackground,
}: {
  title: string;
  description: string;
  language: string;
  link: ILink;
  sectionBackground: CompensationCalculatorBackground;
}) {
  const handbookLinksRes = await getHandbookLinksFromCompensationPage(language);

  const handbookBgClassname = cnIf({
    [styles.handbook]: true,
    [styles["handbook--violet"]]: sectionBackground === "violet",
  });

  return (
    <div className={handbookBgClassname}>
      <Text type="h3">{title}</Text>
      <Text type="bodyBig" className={styles.lightFont}>
        {description}
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

      {link?.linkTitle && (
        <div className={styles.handbookBottomLink}>
          <LinkButton
            type="secondary"
            background={sectionBackground === "violet" ? "dark" : undefined}
            link={link}
          />
        </div>
      )}
    </div>
  );
}
