import Image from "next/image";

import { isChewbaccaEmployeesResponse } from "src/types/employees";

import styles from "./employeesPage.module.css";

const BASE_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

export default async function EmployeesPage() {
  const employeesRes = await fetch(new URL("employees", BASE_URL));
  const employeesData = await employeesRes.json();
  if (!isChewbaccaEmployeesResponse(employeesData)) {
    throw new TypeError(
      `Expected ChewbaccaEmployeesResponse, was ${typeof employeesData}`,
    );
  }

  const total = employeesData.employees.length;

  const employees = employeesData.employees;

  return (
    <div className={styles.wrapper}>
      <div className={styles.employees}>
        <h1 className={styles.header}>Alle varianter</h1>
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
