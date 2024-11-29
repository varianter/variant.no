"use client";

import { use, useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./contact-box.module.css";

export type EmployeeAndTag = {
  employee: ChewbaccaEmployee;
  tag: string;
};

export type ContactSelectorProps = {
  contactPoints: Promise<EmployeeAndTag[]>;
  employeesPageSlug: string;
  language: string;
};

export default function ContactSelector({
  contactPoints: contactPointsPromise,
  employeesPageSlug,
  language,
}: ContactSelectorProps) {
  const contactPoints = use(contactPointsPromise);

  const [selectedTag, setSelectedTag] = useState<string | null>(
    contactPoints[0].tag,
  );
  const selectedContactPoint = contactPoints.find(
    (contactPoint) => selectedTag == contactPoint.tag,
  );

  return (
    <div className={styles.contactSelector}>
      <div className={styles.tagList}>
        {contactPoints.map((contactPoint) => (
          <Tag
            key={contactPoint.tag}
            type="button"
            active={selectedTag === contactPoint.tag}
            onClick={() => setSelectedTag(contactPoint.tag)}
            text={contactPoint.tag}
          />
        ))}
      </div>
      <div className={styles.employeeCard}>
        {selectedContactPoint?.employee && (
          <EmployeeCard
            employee={selectedContactPoint.employee}
            employeePageSlug={employeesPageSlug}
            language={language}
          />
        )}
      </div>
    </div>
  );
}
