import { headers } from "next/headers";

import EmployeeComponent from "src/components/employeeComponent/employeeComponent";
import {
  domainFromEmail,
  fetchAllChewbaccaEmployees,
} from "src/utils/employees";
import { domainFromHostname } from "src/utils/url";
import { EmployeesSection } from "studio/lib/interfaces/pages";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

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
  const total = employees.length;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.employees}>
          <h1 className={styles.header}>{section.basicTitle}</h1>
          <div className={styles.employeeCountWrapper}>
            <p className={styles.employeeCount}>
              Viser <span className={styles.employeeCountValue}>{total}</span>{" "}
              av <span className={styles.employeeCountValue}>{total}</span>{" "}
              konsulenter
            </p>
          </div>
          <div className={styles.peopleContainer}>
            {employees.map((employee) => (
              <EmployeeComponent
                consultant={employee}
                employeePageSlug={employeesPageSlug}
                language={language}
                key={employee.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
  {
    /*     {employees.map(
          (employee) =>
            employee.imageThumbUrl &&
            employee.name &&
            employee.email && (
              <div key={employee.email} className={styles.employee}>
                <Link
                  href={`/${language}/${employeesPageSlug}/${aliasFromEmail(employee.email)}`}
                >
                  <div className={styles.employeeImage}>
                    <Image
                      src={employee.imageUrl ?? employee.imageThumbUrl}
                      alt={employee.name}
                      objectFit="cover"
                      fill={true}
                    />
                  </div>
                </Link>
                <div className={styles.employeeInfo}>
                  <p className={styles.employeeName}>{employee.name}</p>
                  {employee.competences.map((competence) => (
                    <Text
                      type="labelRegular"
                      key={competence}
                      className={styles.employeeRole}
                    >
                      {competence}
                    </Text>
                  ))}
                  {employee.email && (
                    <p className={styles.employeeEmail}>{employee.email}</p>
                  )}
                  {employee.telephone && (
                    <p className={styles.employeeTelephone}>
                      {formatPhoneNumber(employee.telephone)}
                    </p>
                  )}
                </div>
              </div>
            ),
        )}
      </div>
    </div> */
  }
}
