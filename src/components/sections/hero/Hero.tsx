import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { ILink } from "studio/lib/interfaces/navigation";
import { HeroSection } from "studio/lib/interfaces/pages";

import styles from "./hero.module.css";

interface HeroProps {
  hero: HeroSection;
  isLanding: boolean;
}

export const Hero = ({ hero, isLanding = false }: HeroProps) => {
  if (!hero) {
    return;
  }
  return (
    <div
      className={`${styles.wrapper} ${isLanding ? styles.secondaryColor : styles.primaryColor}`}
    >
      {isLanding ? (
        <div className={styles.secondary}>
          <Text type="h1" className={styles.title}>
            {hero.basicTitle}
          </Text>
          {hero.description && (
            <div className={styles.description}>
              <Text type="bodyBig">{hero.description}</Text>
            </div>
          )}
          <ul className={styles.cta}>
            {hero.callToActions?.map((cta: ILink, index) => (
              <li key={cta._key}>
                <LinkButton
                  link={cta}
                  type={
                    hero.callToActions.length > 1 && index === 0
                      ? "secondary"
                      : "primary"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.primary}>
          <Text type="h1">{hero.basicTitle}</Text>
          {hero.description && <Text type="bodyXl">{hero.description}</Text>}
        </div>
      )}
    </div>
  );
};
