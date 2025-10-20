import Link from "next/link";

import LinkButton from "src/components/linkButton/LinkButton";
import { getHandbookLinksFromCompensationPage } from "src/components/sections/compensation-calculator/api";
import styles from "src/components/sections/compensation-calculator/compensation-calculator.module.css";
import Text from "src/components/text/Text";
import { cnIf } from "src/utils/css";
import { getHref } from "src/utils/link";
import {
  HandbookBackground,
  HandbookSection,
} from "studio/lib/interfaces/pages";

interface HandbookProps {
  section: HandbookSection;
  language: string;
}

export async function Handbook({ section, language }: HandbookProps) {
  const {
    handbookTitle,
    handbookDescription,
    handbookLink,
    handbookBackground,
  } = section;

  const handbookLinksRes = await getHandbookLinksFromCompensationPage(language);
  const handbookBgClassname = getHandbookBgClassname(handbookBackground);

  return (
    <div className={handbookBgClassname}>
      <Text type="titleM" color="light">
        {handbookTitle}
      </Text>
      <div className={styles.lightFont}>
        <Text type="lead" color="light">
          {handbookDescription}
        </Text>
      </div>

      {handbookLinksRes.ok && (
        <ul className={styles.handbookLinks}>
          {handbookLinksRes.value.map((link) => (
            <li key={link._key}>
              <Link className={styles.handbookLink} href={getHref(link)}>
                {link.linkTitle || "No Title"}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {handbookLink.linkTitle && (
        <div className={styles.handbookBottomLink}>
          <LinkButton
            type="secondary"
            background={handbookBackground === "violet" ? "dark" : undefined}
            link={section.handbookLink}
          />
        </div>
      )}
    </div>
  );
}

function getHandbookBgClassname(background: HandbookBackground) {
  return cnIf({
    [styles.handbook]: true,
    [styles.handbookViolet]: background === "violet",
  });
}
