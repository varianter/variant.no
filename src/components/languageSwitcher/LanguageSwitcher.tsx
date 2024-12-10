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
        return (
          <Fragment key={pathTranslation._key}>
            <li>
              {pathTranslation._key !== currentLanguage ? (
                <Link
                  className={styles.notSelected}
                  href={`/${pathTranslation._key}/${pathTranslation.value}`}
                  scroll={false}
                >
                  <Text type={"bodySmall"} className={styles.link}>
                    {pathTranslation._key.toUpperCase()}
                  </Text>
                </Link>
              ) : (
                <Text type={"bodySmall"} className={styles.selectedLink}>
                  {pathTranslation._key.toUpperCase()}
                </Text>
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
