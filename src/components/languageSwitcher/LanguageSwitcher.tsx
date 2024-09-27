import Link from "next/link";
import { Fragment } from "react";

import Text from "src/components/text/Text";
import useLanguage from "src/utils/hooks/useLanguage";

import styles from "./languageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { slugTranslations } = useLanguage();
  return (
    <ul className={styles.list}>
      {slugTranslations?.map(
        (slugTranslation, index) =>
          slugTranslation?.language && (
            <Fragment key={slugTranslation.language.id}>
              <li>
                <Link href={slugTranslation.slug}>
                  <Text type={"small"}>
                    {slugTranslation.language.id.toUpperCase()}
                  </Text>
                </Link>
              </li>
              {index < slugTranslations.length - 1 && (
                <span className={styles.divider}></span>
              )}
            </Fragment>
          ),
      )}
    </ul>
  );
}
