import { headers } from "next/headers";
import { Suspense } from "react";

import Text from "src/components/text/Text";
import { fetchAllChewbaccaEmployees } from "src/utils/employees";
import { domainFromHostname } from "src/utils/url";
import { EmployeesSection } from "studio/lib/interfaces/pages";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import EmployeeList from "./EmployeeList";
import styles from "./employees.module.css";
import { EmployeeListSkeleton } from "./EmployeeSkeleton";

export interface EmployeesProps {
  language: string;
  section: EmployeesSection;
}

export default async function Employees({ language, section }: EmployeesProps) {
  const employeesPageRes = await loadStudioQuery<{ slug: string }>(
    EMPLOYEE_PAGE_SLUG_QUERY,
    {
      language,
    },
  );
  const employeesPageSlug = employeesPageRes.data.slug;

  const countryTld = domainFromHostname(headers().get("host"))
    .split(".")
    .at(-1);
  const employees = fetchAllChewbaccaEmployees(countryTld);

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <Text type="h1">{section.basicTitle}</Text>

        <Suspense fallback={<EmployeeListSkeleton />}>
          <EmployeeList
            employees={employees}
            employeesPageSlug={employeesPageSlug}
            language={language}
          />
        </Suspense>
      </div>
    </div>
  );
}
