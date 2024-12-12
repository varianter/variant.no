import Link from "next/link";
import { Fragment } from "react";

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
      {pathTranslations?.map((pathTranslation) => {
        if (pathTranslation._key === undefined) {
          return null;
        }
        return (
          <Fragment key={pathTranslation._key}>
            <li>
              {pathTranslation._key !== currentLanguage ? (
                <Link
                  className={styles.link}
                  href={`/${pathTranslation._key}/${pathTranslation.value}`}
                  scroll={false}
                >
                  {pathTranslation._key.toUpperCase()}
                </Link>
              ) : (
                <span className={styles.selectedLink}>
                  {pathTranslation._key.toUpperCase()}
                </span>
              )}
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
