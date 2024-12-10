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
          <Text type="h1">{hero.description}</Text>
        </div>
      ) : (
        // If splashy segments are added to the hero section in the landing page, this serves as a great fallback option.
        <div className={styles.primary}>
          <Text type="h1">{hero.description}</Text>
        </div>
      )}
    </div>
  );
};
