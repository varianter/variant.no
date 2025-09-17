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
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {employee?.employeePhoto ? (
          <SanityImage image={employee.employeePhoto} />
        ) : null}
        <div className={styles.titleContainer}>
          <Text type={"h5"} className={styles.title}>
            {employee?.basicTitle}
          </Text>
          <div className={styles.nameContainer}>
            <Text type={"h2"} className={styles.name}>
              {employee?.name}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <Text type={"bodyNormal"} className={styles.description}>
          {employee?.description}
        </Text>
        {(employee?.email || employee?.phone) && (
          <div className={styles.contactInfo}>
            {employee?.email && (
              <div className={styles.contactBracket}>
                <span className={styles.bracket}>【</span>
                {employee.email}
                <span className={styles.bracket}>】</span>
              </div>
            )}
            {employee?.phone && (
              <div className={styles.contactBracket}>
                <span className={styles.bracket}>【</span>
                {employee.phone}
                <span className={styles.bracket}>】</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
