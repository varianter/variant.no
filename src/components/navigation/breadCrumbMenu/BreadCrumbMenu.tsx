import Link from "next/link";
import { useTranslations } from "next-intl";

import Text from "src/components/text/Text";

import styles from "./breadCrumbMenu.module.css";

export interface BreadCrumbProps {
  currentLanguage: string;
  pathTitles: string[];
  pathname: string;
}

export const BreadCrumbMenu = ({
  currentLanguage,
  pathTitles,
  pathname,
}: BreadCrumbProps) => {
  const t = useTranslations("navigation");
  return (
    <ul className={styles.breadCrumbMenu}>
      {[
        t("home"),
        ...(pathname.includes(`/${currentLanguage}/`)
          ? pathname.split("/").slice(2)
          : pathname.split("/").slice(1)),
      ].map((slug, index, path) => {
        const href = `/${currentLanguage}/${path.slice(1, index + 1).join("/")}`;
        const isLast = index === path.length - 1;
        const title =
          index === 0 || pathTitles.length < index
            ? slug
            : pathTitles[index - 1];

        return (
          <li key={index} className={styles.breadCrumb}>
            <Link className={styles.breadCrumb} href={href}>
              {index !== 0 && (
                <span
                  className={
                    isLast ? styles.lastDotSeparator : styles.dotSeparator
                  }
                >
                  •
                </span>
              )}
              <Text
                className={
                  isLast ? styles.breadCrumbText : styles.breadCrumbLink
                }
                type={isLast ? "labelSemibold" : "desktopLink"}
              >
                {title}
              </Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
