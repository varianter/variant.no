import Image from "next/image";

import { fetchAllChewbaccaEmployees } from "src/utils/employees";
import { EmployeesSection } from "studio/lib/interfaces/pages";

import styles from "./employees.module.css";

export interface EmployeesProps {
  section: EmployeesSection;
}

export default async function Employees({ section }: EmployeesProps) {
  const employeesResult = await fetchAllChewbaccaEmployees();

  if (!employeesResult.ok) {
    console.error("Failed to fetch employees: ", employeesResult.error);
    return;
  }

  const employees = employeesResult.value;
  const total = employees.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <h1 className={styles.header}>{section.basicTitle}</h1>
        <div className={styles.employeeCountWrapper}>
          <p className={styles.employeeCount}>
            Viser <span className={styles.employeeCountValue}>{total}</span> av{" "}
            <span className={styles.employeeCountValue}>{total}</span>{" "}
            konsulenter
          </p>
        </div>
        {employees.map(
          (employee) =>
            employee.imageThumbUrl &&
            employee.name &&
            employee.email && (
              <div key={employee.email} className={styles.employee}>
                <div className={styles.employeeImage}>
                  <Image
                    src={employee.imageUrl ?? employee.imageThumbUrl}
                    alt={employee.name}
                    objectFit="cover"
                    fill={true}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <p className={styles.employeeName}>{employee.name}</p>
                  {employee.officeName && (
                    <p className={styles.employeeRole}>{employee.officeName}</p>
                  )}
                  {employee.email && (
                    <p className={styles.employeeEmail}>{employee.email}</p>
                  )}
                  {employee.telephone && (
                    <p className={styles.employeeTelephone}>
                      {employee.telephone}
                    </p>
                  )}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
