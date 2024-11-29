import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { ContactBoxSection } from "studio/lib/interfaces/pages";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./contact-box.module.css";
import ContactSelector, { EmployeeAndTag } from "./ContactSelector";

export interface ContactBoxProps {
  section: ContactBoxSection;
  language: string;
}

export default async function ContactBox({
  section,
  language,
}: ContactBoxProps) {
  const employeesPageRes = await loadStudioQuery<{ slug: string }>(
    EMPLOYEE_PAGE_SLUG_QUERY,
    {
      language,
    },
  );
  const employeesPageSlug = employeesPageRes.data.slug;

  const contactPoints = fetchEmployeesByEmails(
    section.contactPoints.map((contactPoint) => contactPoint.email),
  ).then((result) =>
    result.ok
      ? result.value.map((e) => employeeAndTag(e, section.contactPoints))
      : [],
  );

  return (
    <section className={styles.contactBox}>
      <div>
        <Text type="h3" as="h2">
          {section.basicTitle}
        </Text>

        {section.optionalSubtitle && (
          <Text type="bodyBig">{section.optionalSubtitle}</Text>
        )}
      </div>

      <div>
        <Suspense fallback={<EmployeeCardSkeleton />}>
          <ContactSelector
            employeesPageSlug={employeesPageSlug}
            contactPoints={contactPoints}
            language={language}
          />
        </Suspense>
      </div>
    </section>
  );
}

function employeeAndTag(
  employee: ChewbaccaEmployee,
  contactPoints: ContactBoxSection["contactPoints"],
): EmployeeAndTag {
  const tag =
    contactPoints.find((contactPoint) => contactPoint.email === employee.email)
      ?.tag ?? "";
  return {
    employee,
    tag,
  };
}
