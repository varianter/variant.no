import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
import Text from "src/components/text/Text";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./contactInformation.module.css";
import ContactSelector, { ContactByLocationMap } from "./ContactSelector";

interface ContactInformationProps {
  language: string;
}

async function fetchContactByLocationMap(
  companyLocations: CompanyLocation[],
): Promise<ContactByLocationMap> {
  const contactByLocation: ContactByLocationMap = {};
  for (const location of companyLocations) {
    if (
      location.contactPerson === undefined ||
      location.contactPerson.length === 0
    ) {
      continue;
    }
    const contactRes = await fetchEmployeesByEmails([location.contactPerson]);
    if (!contactRes.ok || contactRes.value.length === 0) {
      continue;
    }
    contactByLocation[location._id] = contactRes.value[0];
  }
  return contactByLocation;
}

export default async function ContactInformation({
  language,
}: ContactInformationProps) {
  const employeePageSlug = (
    await loadStudioQuery<{ slug: string } | null>(EMPLOYEE_PAGE_SLUG_QUERY, {
      language,
    })
  ).data?.slug;
  const companyLocations = (
    await loadStudioQuery<CompanyLocation[]>(COMPANY_LOCATIONS_QUERY, {})
  ).data;
  const contactByLocation = await fetchContactByLocationMap(companyLocations);
  const locationIdsWithContact = Object.keys(contactByLocation);
  const locationsWithContact = companyLocations.filter((location) =>
    locationIdsWithContact.includes(location._id),
  );
  const t = await getTranslations("contact_information");
  return (
    <>
      <section className={styles.contactBox}>
        <div
          className={`${styles.contactBox__inner} ${styles["contactBox__inner--light"]}`}
        >
          <div className={styles.textContent}>
            <Text type="h3" as="h2">
              {t("help")}
            </Text>
            <Text type="bodyBig">{t("contact_sale")} </Text>
          </div>
          <div className={styles.contactSelectorWrapper}>
            <Suspense fallback={<EmployeeCardSkeleton background={"light"} />}>
              <ContactSelector
                language={language}
                locations={locationsWithContact}
                contactByLocation={contactByLocation}
                employeePageSlug={employeePageSlug}
                background={"light"}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
