import { getTranslations } from "next-intl/server";

import CustomerCaseEmployeeCard from "src/components/customerCaseEmployeeCard/CustomerCaseEmployeeCard";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./customerCaseConsulants.module.css";

export interface CustomerCaseConsultantsProps {
  language: string;
  consultants: ChewbaccaEmployee[];
}

export default async function CustomerCaseConsultants({
  language,
  consultants,
}: CustomerCaseConsultantsProps) {
  const employeePageSlugRes = await loadStudioQuery<{ slug: string } | null>(
    EMPLOYEE_PAGE_SLUG_QUERY,
    {
      language,
    },
  );
  const employeePageSlug = employeePageSlugRes.data?.slug;

  const t = await getTranslations("customer_case");

  return (
    <div className={styles.wrapper}>
      <Text type={"h4"}>{t("in_project")}</Text>
      <div className={styles.content}>
        {consultants.map((consultant) => (
          <CustomerCaseEmployeeCard
            key={consultant.email}
            currentLanguage={language}
            employee={consultant}
            employeePageSlug={employeePageSlug}
          />
        ))}
      </div>
    </div>
  );
}
