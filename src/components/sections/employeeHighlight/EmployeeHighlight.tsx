import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { EmployeeHighlightSection } from "studio/lib/interfaces/pages";

import styles from "./employeeHighlight.module.css";

export interface EmployeeHighlightProps {
  section: EmployeeHighlightSection;
}

export default function EmployeeHighLight({ section }: EmployeeHighlightProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <SanityImage image={section.employeePhoto} />
      </div>
      <div>
        <div className={styles.titleSection}>
          <Text type={"h5"} className={styles.title}>
            {section.basicTitle}
          </Text>
          <div className={styles.nameContainer}>
            <Text type={"h2"} className={styles.name}>
              {section.name}
            </Text>
          </div>
        </div>
        <Text type={"bodyNormal"} className={styles.description}>
          {section.description}
        </Text>
      </div>
    </div>
  );
}
