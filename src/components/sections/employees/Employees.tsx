import { headers } from "next/headers";

import {
  domainFromEmail,
  fetchAllChewbaccaEmployees,
} from "src/utils/employees";
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

  const employeesResult = await fetchAllChewbaccaEmployees();

  if (!employeesResult.ok) {
    console.error("Failed to fetch employees: ", employeesResult.error);
    return;
  }

  const domain = domainFromHostname(headers().get("host"));
  const employees = employeesResult.value.filter(
    (employee) =>
      employee.email != null && domainFromEmail(employee.email) === domain,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <h1 className={styles.header}>{section.basicTitle}</h1>
        <EmployeeList
          language={language}
          employees={employees}
          employeesPageSlug={employeesPageSlug}
        />
      </div>
    </div>
  );
}
