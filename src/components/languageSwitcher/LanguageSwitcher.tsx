import Link from "next/link";
import { Fragment } from "react";

import Text from "src/components/text/Text";
import { InternationalizedString } from "studio/lib/interfaces/global";

import styles from "./languageSwitcher.module.css";

export interface LanguageSwitcherProps {
  currentLanguage: string;
  pathTranslations: InternationalizedString;
}

export default function LanguageSwitcher({
  currentLanguage,
  pathTranslations,
}: LanguageSwitcherProps) {
  return (
    <ul className={styles.list}>
      {pathTranslations?.map((pathTranslation, index) => {
        if (pathTranslation._key === undefined) {
          return null;
        }
        const linkText = (
          <Text type={"bodySmall"}>{pathTranslation._key.toUpperCase()}</Text>
        );
        return (
          <Fragment key={pathTranslation._key}>
            <li>
              {pathTranslation._key !== currentLanguage ? (
                <Link
                  href={`/${pathTranslation._key}/${pathTranslation.value}`}
                >
                  {linkText}
                </Link>
              ) : (
                linkText
              )}
            </li>
            {index < pathTranslations.length - 1 && (
              <span className={styles.divider}></span>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
