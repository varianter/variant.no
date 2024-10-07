import Link from "next/link";
import { Fragment } from "react";

import Text from "src/components/text/Text";
import useLanguage from "src/utils/hooks/useLanguage";

import styles from "./languageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { slugTranslations, language, defaultLanguage } = useLanguage();

  const currentLanguage = language ?? defaultLanguage;

  // make sure the current language is the first item in the languages list
  const sortedTranslations = slugTranslations?.toSorted((a, b) =>
    a?.language?.id === currentLanguage?.id
      ? -1
      : b?.language?.id === currentLanguage?.id
        ? 1
        : 0,
  );

  return (
    <ul className={styles.list}>
      {sortedTranslations?.map((slugTranslation, index) => {
        if (slugTranslation?.language === undefined) {
          return null;
        }
        const linkText = (
          <Text type={"small"}>
            {slugTranslation.language.id.toUpperCase()}
          </Text>
        );
        return (
          <Fragment key={slugTranslation.language.id}>
            <li>
              {currentLanguage === undefined ||
              slugTranslation.language.id !== currentLanguage.id ? (
                <Link href={slugTranslation.slug}>{linkText}</Link>
              ) : (
                linkText
              )}
            </li>
            {index < sortedTranslations.length - 1 && (
              <span className={styles.divider}></span>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
