"use client";

import { use } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import useTabs from "src/utils/hooks/useTabs";

import styles from "./contact-box.module.css";
import { EmployeeAndMetadata } from "./types";

export type ContactSelectorProps = {
  contactPoints: Promise<EmployeeAndMetadata[]>;
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
  const { tabListRef, selectedTabIndex } = useTabs();

  if (!contactPoints.length) {
    return null;
  }

  return (
    <div className={styles.contactSelector}>
      <ul className={styles.tagList} role="tablist" ref={tabListRef}>
        {contactPoints.map((contactPoint, index) => (
          <li key={contactPoint.tagSlug}>
            <Tag
              type="button"
              role="tab"
              background={background}
              aria-selected={selectedTabIndex === index}
              aria-controls={`panel-${contactPoint.tagSlug}`}
              id={`tab-${contactPoint.tagSlug}`}
              active={selectedTabIndex === index}
              text={contactPoint.tag}
              tabIndex={selectedTabIndex === index ? 0 : -1}
            />
          </li>
        ))}
      </ul>
      <div className={styles.employeeCard}>
        {contactPoints.map((contactPoint, index) => (
          <div
            key={contactPoint.tagSlug}
            role="tabpanel"
            id={`panel-${contactPoint.tagSlug}`}
            aria-labelledby={`tab-${contactPoint.tagSlug}`}
            hidden={selectedTabIndex !== index}
            tabIndex={selectedTabIndex === index ? 0 : -1}
          >
            <EmployeeCard
              employee={contactPoint.employee}
              employeePageSlug={employeesPageSlug}
              language={language}
              overrideTitle={contactPoint.overrideTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
