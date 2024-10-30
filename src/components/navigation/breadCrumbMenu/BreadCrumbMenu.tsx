import Link from "next/link";

import Text from "src/components/text/Text";

import styles from "./breadCrumbMenu.module.css";

export interface BreadCrumbProps {
  currentLanguage: string;
  pathname: string;
}

export const BreadCrumbMenu = ({
  currentLanguage,
  pathname,
}: BreadCrumbProps) => {
  return (
    <ul className={styles.breadCrumbMenu}>
      {/* TODO: "Hjem" should be updated with translation */}
      {[
        "Hjem",
        ...(pathname.includes("/" + currentLanguage + "/")
          ? pathname.split("/").slice(2)
          : pathname.split("/").slice(1)),
      ].map((e, index, path) => {
        const href =
          "/" + currentLanguage + "/" + path.slice(1, index + 1).join("/");
        const isLast = index === path.length - 1;

        return (
          <li key={index} className={styles.breadCrumb}>
            <Link className={styles.breadCrumb} href={href}>
              <Text
                className={
                  isLast ? styles.breadCrumbText : styles.breadCrumbLink
                }
                type={isLast ? "labelSemibold" : "desktopLink"}
              >
                {e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()}
              </Text>
            </Link>
            {!isLast && (
              <span
                className={
                  index < path.length - 2
                    ? styles.dotSeparator
                    : styles.lastDotSeparator
                }
              >
                •
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
