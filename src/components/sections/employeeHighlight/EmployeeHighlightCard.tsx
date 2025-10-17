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
          <div className={styles.title}>
            <Text type={"titleXS"} color="light">
              {basicTitle}
            </Text>
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.name}>
              <Text type={"titleL"}>{name}</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <Text type={"bodyNormal"}>{description}</Text>
        <div className={styles.contactInfo}>
          {email && (
            <div className={styles.contactBracket}>
              <Text type="bodyNormal">
                <span className={styles.bracket}>【</span>
                {email}
                <span className={styles.bracket}>】</span>
              </Text>
            </div>
          )}
          {phone && (
            <div className={styles.contactBracket}>
              <Text type="bodyNormal">
                <span className={styles.bracket}>【</span>
                {phone}
                <span className={styles.bracket}>】</span>
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
