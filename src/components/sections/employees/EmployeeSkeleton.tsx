import { EmployeeCardSkeleton } from "src/components/employeeCard/EmployeeCard";

import styles from "./employees.module.css";

export function EmployeeListSkeleton() {
  return (
    <div className={styles.peopleContainer}>
      {[...Array(4)].map((_, index) => (
        <EmployeeCardSkeleton key={index} />
      ))}
    </div>
  );
}
