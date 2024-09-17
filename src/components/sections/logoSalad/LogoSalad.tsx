import { PortableText } from "@portabletext/react";

import Text from "src/components/text/Text";
import { LogoSaladSection } from "studio/lib/interfaces/pages";

import { RenderLogo } from "./LogoRender";
import styles from "./logoSalad.module.css";

interface LogoSaladProps {
  logoSalad: LogoSaladSection;
}

const myPortableTextComponents = {
  block: ({ children }: any) => <Text type="bodySuperLarge">{children}</Text>,
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
                      <RenderLogo asset={logo} />
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
