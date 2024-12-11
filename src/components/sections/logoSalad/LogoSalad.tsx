import { SanityImage } from "src/components/image/SanityImage";
import { LogoSaladSection } from "studio/lib/interfaces/pages";

import styles from "./logoSalad.module.css";

interface LogoSaladProps {
  logoSalad: LogoSaladSection;
}

export const LogoSalad = ({ logoSalad }: LogoSaladProps) => {
  return (
    <article className={styles.wrapper} id={logoSalad._key}>
      <ul className={styles.logoWrapper}>
        {logoSalad.logos.map((logo) => (
          <li key={logo._key}>
            <SanityImage image={logo} />
          </li>
        ))}
      </ul>
    </article>
  );
};
