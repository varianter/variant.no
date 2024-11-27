import Image from "next/image";

import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./customerCaseEmployeeCard.module.css";

export interface CustomerCaseEmployeeCardProps {
  currentLanguage: string;
  employee: ChewbaccaEmployee;
  employeePageSlug?: string;
}

export default function CustomerCaseEmployeeCard({
  employee,
}: CustomerCaseEmployeeCardProps) {
  return (
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
          <div className={styles.employeeName}>
            <Text type="bodyNormal">{employee.name}</Text>
            <div className={styles.employeeRole}>
              {employee.competences.map((competence) => (
                <Text
                  className={styles.employeeRoleDot}
                  type="labelRegular"
                  key={competence}
                >
                  {competence}
                </Text>
              ))}
            </div>
          </div>
          <div>
            {employee.email && (
              <Text type="bodyExtraSmall" className={styles.employeeEmail}>
                {employee.email}
              </Text>
            )}
            {employee.telephone && (
              <Text type="bodyExtraSmall" className={styles.employeeTelephone}>
                {formatPhoneNumber(employee.telephone)}
              </Text>
            )}
          </div>
        </div>
      </div>
    )
  );
}
