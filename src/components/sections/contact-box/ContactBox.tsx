import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
import Text from "src/components/text/Text";
import { ContactBoxSection } from "studio/lib/interfaces/pages";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import { fetchEmployeesWithTags, getEmployeesPageSlug } from "./api";
import styles from "./contact-box.module.css";
import ContactSelector from "./ContactSelector";

export interface ContactBoxProps {
  section: ContactBoxSection;
  language: string;
}

export default async function ContactBox({
  section,
  language,
}: ContactBoxProps) {
  const employeesPageSlug = await getEmployeesPageSlug(language);

  if (!employeesPageSlug) {
    return null;
  }

  const contactPoints = fetchEmployeesWithTags(section.contactPoints);

  const backgroundClass =
    section.background === "light" ? styles["contactBox__inner--light"] : "";

  return (
    <section className={styles.contactBox}>
      <div className={`${styles.contactBox__inner} ${backgroundClass}`}>
        <div className={styles.textContent}>
          <Text type="h3" as="h2">
            {section.basicTitle}
          </Text>

          {section.optionalSubtitle && (
            <Text type="bodyBig">{section.optionalSubtitle}</Text>
          )}
        </div>

        <div className={styles.contactSelectorWrapper}>
          <Suspense
            fallback={<EmployeeCardSkeleton background={section.background} />}
          >
            <ContactSelector
              employeesPageSlug={employeesPageSlug}
              contactPoints={contactPoints}
              language={language}
              background={section.background}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
