import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
import TabbedSectionSkeleton from "src/components/tabbedSection/TabbedSectionSkeleton";
import Text from "src/components/text/Text";

import styles from "./contact-box.module.css";
import ContactSelector from "./ContactSelector";
import { EmployeeAndMetadata } from "./types";

export interface ContactBoxProps {
  data: {
    basicTitle: string;
    optionalSubtitle?: string;
    background: "light" | "dark" | "transparent";
  };
  language: string;
  employeesPageSlug: string;
  contactPoints: Promise<EmployeeAndMetadata[]>;
}

export default async function ContactBoxContent({
  data,
  language,
  employeesPageSlug,
  contactPoints,
}: ContactBoxProps) {
  const employeeCardBackground =
    data.background === "transparent" ? "light" : data.background;

  const textContent = (
    <div className={styles.textContent}>
      <Text type="titleM" as="h2">
        {data.basicTitle}
      </Text>

      {data.optionalSubtitle && (
        <Text type="lead">{data.optionalSubtitle}</Text>
      )}
    </div>
  );

  return (
    <section className={styles.contactBox}>
      <Suspense
        fallback={
          // Same outer structure as TabbedSection with a contact grid, so the
          // layout does not shift when the contact points load
          <TabbedSectionSkeleton background={data.background}>
            <div className={styles.contactGrid}>
              {textContent}
              <div className={styles.contactSelectorWrapper}>
                <EmployeeCardSkeleton background={employeeCardBackground} />
              </div>
            </div>
          </TabbedSectionSkeleton>
        }
      >
        <ContactSelector
          employeesPageSlug={employeesPageSlug}
          contactPoints={contactPoints}
          language={language}
          background={data.background}
          title={data.basicTitle}
          subtitle={data.optionalSubtitle}
        />
      </Suspense>
    </section>
  );
}
