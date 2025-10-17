import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { LogoSaladSection } from "studio/lib/interfaces/pages";

import styles from "./logoSalad.module.css";

interface LogoSaladProps {
  logoSalad: LogoSaladSection;
}

export const LogoSalad = ({ logoSalad }: LogoSaladProps) => {
  return (
    <article className={styles.wrapper} id={logoSalad._key}>
      <div>
        <div className={styles.title}>
          <Text type="titleM">{logoSalad.title}</Text>
        </div>
        <ul className={styles.logoWrapper}>
          {logoSalad.logos.map((logo) => (
            <li key={logo._key}>
              <SanityImage image={logo} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
