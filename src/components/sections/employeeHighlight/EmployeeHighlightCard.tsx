import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { EmployeeHighlightItem } from "studio/lib/interfaces/pages";

import styles from "./employeeHighlightCard.module.css";

/**
 * Renders a single employee card with photo, title, name, description and contact info.
 * Used by both single employee display and carousel slides.
 */
export function EmployeeHighlightCard({
  employee,
}: {
  employee: EmployeeHighlightItem;
}) {
  const { phone, name, employeePhoto, email, description, basicTitle } =
    employee;
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {employeePhoto && <SanityImage image={employeePhoto} />}
        <div className={styles.titleContainer}>
          <Text type={"h5"} className={styles.title}>
            {basicTitle}
          </Text>
          <div className={styles.nameContainer}>
            <Text type={"h2"} className={styles.name}>
              {name}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <Text type={"bodyNormal"}>{description}</Text>
        <div className={styles.contactInfo}>
          {email && (
            <Text type="bodyNormal" className={styles.contactBracket}>
              <span className={styles.bracket}>【</span>
              {email}
              <span className={styles.bracket}>】</span>
            </Text>
          )}
          {phone && (
            <Text type="bodyNormal" className={styles.contactBracket}>
              <span className={styles.bracket}>【</span>
              {phone}
              <span className={styles.bracket}>】</span>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
