import { headers } from "next/headers";
import { Suspense } from "react";

import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";
import { fetchAllChewbaccaEmployees } from "src/utils/employees";
import { domainFromHostname } from "src/utils/url";
import { EmployeesSection } from "studio/lib/interfaces/pages";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import EmployeeList from "./EmployeeList";
import styles from "./employees.module.css";

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

  const countryTld = domainFromHostname(headers().get("host")).split(".")[1];
  const employees = fetchAllChewbaccaEmployees(countryTld);

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <h1 className={styles.header}>{section.basicTitle}</h1>

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

function EmployeeListSkeleton() {
  return (
    <div className={styles.peopleContainer}>
      {[...Array(4)].map((_, index) => (
        <EmployeeCardSkeleton key={index} />
      ))}
    </div>
  );
}
