import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";

import styles from "./employeeCard.module.css";

export interface EmployeeCardProps {
  employee: ChewbaccaEmployee;
  employeePageSlug?: string;
  language: string;
  overrideTitle?: string;
}

export default function EmployeeCard({
  employee,
  employeePageSlug,
  language,
  overrideTitle,
}: EmployeeCardProps) {
  const t = useTranslations("employee_card");
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
                sizes="280px"
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
              {overrideTitle ? (
                <Text type="labelRegular" as="span">
                  {overrideTitle}
                </Text>
              ) : (
                employee.competences.map((competence) => (
                  <Text
                    className={styles.employeeRoleDot}
                    type="labelRegular"
                    key={competence}
                    as="span"
                  >
                    {t.has(competence) ? t(competence) : competence}
                  </Text>
                ))
              )}
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

export function EmployeeCardSkeleton({
  background = "light",
}: {
  background?: "light" | "dark" | "transparent";
}) {
  const backgroundClass =
    background === "dark" ? styles["employeeImage--dark"] : "";
  const backgroundClassText =
    background === "dark"
      ? `${styles.skeletonText} ${styles["skeletonText--dark"]}`
      : styles.skeletonText;
  return (
    <div className={styles.employeeWrapper}>
      <div
        className={`${styles.employeeWrapper__inner} ${styles.skeletonCard}`}
      >
        <div className={`${styles.employeeImage} ${backgroundClass}`} />
        <div className={styles.employeeInfoWrapper}>
          <div className={`${backgroundClassText} ${styles.skeletonName}`} />
          <div className={`${backgroundClassText} ${styles.skeletonTitle}`} />
          <div
            className={`${backgroundClassText} ${styles.skeletonAutoMargin} ${styles.skeletonContact}`}
          />
          <div className={`${backgroundClassText} ${styles.skeletonContact}`} />
        </div>
      </div>
    </div>
  );
}
