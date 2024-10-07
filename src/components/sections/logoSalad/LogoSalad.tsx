import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { LogoSaladSection } from "studio/lib/interfaces/pages";

import styles from "./logoSalad.module.css";

interface LogoSaladProps {
  logoSalad: LogoSaladSection;
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodySuperLarge">{children}</Text>,
};

export const LogoSalad = ({ logoSalad }: LogoSaladProps) => {
  return (
    <article className={styles.wrapper} id={logoSalad._key}>
      <div className={styles.logoSalad}>
        {logoSalad.richText && (
          <PortableText
            value={logoSalad.richText}
            components={myPortableTextComponents}
          />
        )}
        <div className={styles.logoList}>
          <Text>{logoSalad.supporting}</Text>
          {logoSalad.logos && (
            <ul className={styles.logoWrapper}>
              {logoSalad.logos.map(
                (logo) =>
                  logo && (
                    <li key={logo._key}>
                      <SanityImage image={logo} />
                    </li>
                  ),
              )}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};
