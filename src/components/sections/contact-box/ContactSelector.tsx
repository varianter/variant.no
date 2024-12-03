"use client";

import { use, useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./contact-box.module.css";

export type EmployeeAndTag = {
  employee: ChewbaccaEmployee;
  tag: string;
  tagSlug: string;
};

export type ContactSelectorProps = {
  contactPoints: Promise<EmployeeAndTag[]>;
  employeesPageSlug: string;
  language: string;
  background?: "dark" | "light";
};

export default function ContactSelector({
  contactPoints: contactPointsPromise,
  employeesPageSlug,
  language,
  background = "dark",
}: ContactSelectorProps) {
  const contactPoints = use(contactPointsPromise);

  const [selectedTag, setSelectedTag] = useState<string | null>(
    contactPoints[0]?.tagSlug,
  );

  if (!contactPoints.length) {
    return null;
  }

  return (
    <div className={styles.contactSelector}>
      <div className={styles.tagList} role="tablist">
        {contactPoints.map((contactPoint) => (
          <Tag
            key={contactPoint.tagSlug}
            type="button"
            role="tab"
            background={background}
            aria-selected={selectedTag === contactPoint.tagSlug}
            aria-controls={`panel-${contactPoint.tagSlug}`}
            id={`tab-${contactPoint.tagSlug}`}
            active={selectedTag === contactPoint.tagSlug}
            onClick={() => setSelectedTag(contactPoint.tagSlug)}
            text={contactPoint.tag}
          />
        ))}
      </div>
      <div className={styles.employeeCard}>
        {contactPoints.map((contactPoint) => (
          <div
            key={contactPoint.tagSlug}
            role="tabpanel"
            id={`panel-${contactPoint.tagSlug}`}
            aria-labelledby={`tab-${contactPoint.tagSlug}`}
            hidden={selectedTag !== contactPoint.tagSlug}
          >
            <EmployeeCard
              employee={contactPoint.employee}
              employeePageSlug={employeesPageSlug}
              language={language}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
