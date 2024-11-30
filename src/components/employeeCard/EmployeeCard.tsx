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
        <div className={styles.employeeWrapper__inner}>
          <Link
            href={`/${language}/${employeePageSlug}/${aliasFromEmail(employee.email)}`}
          >
            <div className={styles.employeeImage}>
              <Image
                src={employee.imageUrl}
                alt={employee.name}
                style={{ objectFit: "cover" }}
                fill={true}
              />
            </div>
          </Link>
          <div className={styles.employeeInfoWrapper}>
            <Text type="h4" as="h3">
              <Link
                href={`/${language}/${employeePageSlug}/${aliasFromEmail(employee.email)}`}
                className={styles.employeeNameLink}
              >
                {employee.name}
              </Link>
            </Text>

            <div className={styles.employeeRole}>
              {employee.competences.map((competence) => (
                <Text
                  className={styles.employeeRoleDot}
                  type="labelRegular"
                  key={competence}
                  as="span"
                >
                  {competence}
                </Text>
              ))}
            </div>

            <Text type="bodyExtraSmall" className={styles.employeeEmail}>
              <a href={`mailto:${employee.email}`}>{employee.email}</a>
            </Text>
            {employee.telephone && (
              <Text type="bodyExtraSmall" className={styles.employeePhone}>
                <a href={`tel:${employee.telephone}`}>
                  {formatPhoneNumber(employee.telephone)}
                </a>
              </Text>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export function EmployeeCardSkeleton() {
  return (
    <div className={`${styles.employeeWrapper} ${styles.skeletonCard}`}>
      <div className={styles.employeeImage} />
      <div className={`${styles.skeletonText} ${styles.skeletonName}`} />
      <div className={`${styles.skeletonText} ${styles.skeletonTitle}`} />
      <div className={`${styles.skeletonText} ${styles.skeletonContact}`} />
      <div className={`${styles.skeletonText} ${styles.skeletonContact}`} />
    </div>
  );
}
