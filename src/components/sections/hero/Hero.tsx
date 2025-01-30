import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
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
    <div className={styles.wrapper}>
      {isLanding ? (
        <div className={styles.secondary}>
          {hero.title && <Text type="bodyBig">{hero.title}</Text>}
          {hero.description && <Text type="h1">{hero.description}</Text>}
          {hero.image && (
            <div className={styles.image}>
              <SanityImage image={hero.image} />
            </div>
          )}
        </div>
      ) : (
        // This section is prepared for a custom hero section for pages that are not landing pages.
        <div className={styles.secondary}>
          {hero.title && <Text type="bodyBig">{hero.title}</Text>}
          {hero.description && <Text type="h1">{hero.description}</Text>}
          {hero.image && (
            <div className={styles.image}>
              <SanityImage image={hero.image} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
