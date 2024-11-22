import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";
import { LinkType } from "studio/lib/interfaces/navigation";

import styles from "./customerCaseEmployeeCard.module.css";

export interface CustomerCaseEmployeeCardProps {
  currentLanguage: string;
  employee: ChewbaccaEmployee;
  employeePageSlug?: string;
}

export default function CustomerCaseEmployeeCard({
  currentLanguage,
  employee,
  employeePageSlug,
}: CustomerCaseEmployeeCardProps) {
  const title = <p className={styles.employeeName}>{employee.name}</p>;
  const t = useTranslations("custom_link");

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
          {employeePageSlug !== undefined ? (
            <Link
              href={`/${currentLanguage}/${employeePageSlug}/${aliasFromEmail(employee.email)}`}
            >
              {title}
            </Link>
          ) : (
            title
          )}
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
          {employee.email && (
            <p className={styles.employeeEmail}>{employee.email}</p>
          )}
          {employee.telephone && (
            <p className={styles.employeeTelephone}>
              {formatPhoneNumber(employee.telephone)}
            </p>
          )}
          {employeePageSlug && (
            <CustomLink
              size={"small"}
              link={{
                _key: "go-to-mini-cv",
                _type: "link",
                linkType: LinkType.Internal,
                linkTitle: t("visit_cv"),
                language: currentLanguage,
                internalLink: {
                  _ref: `${employeePageSlug}/${aliasFromEmail(employee.email)}`,
                },
              }}
            />
          )}
        </div>
      </div>
    )
  );
}
