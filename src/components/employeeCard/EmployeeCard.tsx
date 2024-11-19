import Image from "next/image";
import Link from "next/link";

import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";

import styles from "./employeeCard.module.css";

export interface EmployeeCardProps {
  employee: ChewbaccaEmployee;
  employeePageSlug?: string;
  language: string;
}

export default function EmployeeCard({
  employee,
  employeePageSlug,
  language,
}: EmployeeCardProps) {
  return (
    employee.imageUrl &&
    employee.name &&
    employee.email && (
      <div className={styles.employeeWrapper}>
        <Link
          href={`/${language}/${employeePageSlug}/${aliasFromEmail(employee.email)}`}
        >
          <div className={styles.employeeImage}>
            <Image
              src={employee.imageUrl}
              alt=""
              style={{ objectFit: "cover" }}
              fill={true}
            />
          </div>
        </Link>
        <div className={styles.employeeInfoWrapper}>
          <div className={styles.employeeInfo}>
            <p className={styles.employeeName}>{employee.name}</p>
            <div className={styles.employeeRole}>
              {employee.competences.map((competence) => (
                <>
                  <Text
                    className={styles.employeeRoleDot}
                    type="labelRegular"
                    key={competence}
                  >
                    {competence}
                  </Text>
                </>
              ))}
            </div>
          </div>

          <div className={styles.employeeContactInfo}>
            <p>{employee.email}</p>
            {employee.telephone && (
              <p>{formatPhoneNumber(employee.telephone)}</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}
