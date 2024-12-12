import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
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
  const backgroundClass = styles[`contactBox__inner--${data.background}`];
  const employeeCardBackground =
    data.background === "transparent" ? "light" : data.background;

  return (
    <section className={styles.contactBox}>
      <div className={`${styles.contactBox__inner} ${backgroundClass}`}>
        <div className={styles.textContent}>
          <Text type="h3" as="h2">
            {data.basicTitle}
          </Text>

          {data.optionalSubtitle && (
            <Text type="bodyBig">{data.optionalSubtitle}</Text>
          )}
        </div>

        <div className={styles.contactSelectorWrapper}>
          <Suspense
            fallback={
              <EmployeeCardSkeleton background={employeeCardBackground} />
            }
          >
            <ContactSelector
              employeesPageSlug={employeesPageSlug}
              contactPoints={contactPoints}
              language={language}
              background={employeeCardBackground}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
