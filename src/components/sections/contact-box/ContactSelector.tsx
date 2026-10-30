"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import TabbedSection from "src/components/tabbedSection/TabbedSection";
import Text from "src/components/text/Text";

import styles from "./contact-box.module.css";
import { EmployeeAndMetadata } from "./types";

export type ContactSelectorProps = {
  contactPoints: Promise<EmployeeAndMetadata[]>;
  employeesPageSlug: string;
  language: string;
  background?: "dark" | "light" | "transparent";
  title: string;
  subtitle?: string;
};

export default function ContactSelector({
  contactPoints: contactPointsPromise,
  employeesPageSlug,
  language,
  background = "dark",
  title,
  subtitle,
}: ContactSelectorProps) {
  const t = useTranslations("contact_information");
  const contactPoints = use(contactPointsPromise);
  const [selectedSlug, setSelectedSlug] = useState(contactPoints[0]?.tagSlug);

  const selected =
    contactPoints.find(
      (contactPoint) => contactPoint.tagSlug === selectedSlug,
    ) ?? contactPoints[0];

  return (
    <TabbedSection
      label={t("contact_point")}
      tabs={contactPoints.map((contactPoint) => ({
        id: contactPoint.tagSlug,
        label: contactPoint.tag,
      }))}
      activeId={selected?.tagSlug ?? ""}
      onSelect={setSelectedSlug}
      background={background}
    >
      <div className={styles.contactGrid}>
        <div className={styles.textContent}>
          <Text type="titleM" as="h2">
            {title}
          </Text>
          {subtitle && <Text type="lead">{subtitle}</Text>}
        </div>
        {selected && (
          <div className={styles.contactSelectorWrapper}>
            <EmployeeCard
              employee={selected.employee}
              employeePageSlug={employeesPageSlug}
              language={language}
              overrideTitle={selected.overrideTitle}
            />
          </div>
        )}
      </div>
    </TabbedSection>
  );
}
