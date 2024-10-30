import Image from "next/image";

import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./employeePage.module.css";

export interface EmployeePageProps {
  employee: ChewbaccaEmployee;
}

export default function EmployeePage({ employee }: EmployeePageProps) {
  const image = employee.imageUrl ?? employee.imageThumbUrl ?? null;
  return (
    employee.name && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.employee}>
            {image != null && (
              <div className={styles.employeeImage}>
                <Image
                  src={image}
                  alt={employee.name}
                  objectFit="cover"
                  fill={true}
                />
              </div>
            )}
            <div className={styles.employeeInfo}>
              <Text type={"h2"}>{employee.name}</Text>
              {employee.email && (
                <Text type={"bodyBig"} className={styles.employeeEmail}>
                  {employee.email}
                </Text>
              )}
              {employee.telephone && (
                <Text type={"bodyBig"} className={styles.employeeTelephone}>
                  {employee.telephone}
                </Text>
              )}
              {employee.officeName && (
                <Text type={"bodyNormal"} className={styles.employeeRole}>
                  {employee.officeName}
                </Text>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
