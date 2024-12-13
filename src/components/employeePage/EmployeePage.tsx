import { getTranslations } from "next-intl/server";

import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./employeePage.module.css";

export interface EmployeePageProps {
  employee: ChewbaccaEmployee;
  language: string;
}

export default async function EmployeePage({
  employee,
  language,
}: EmployeePageProps) {
  const employeePageSlug = await getEmployeePageSlug(language);
  const image = employee.imageUrl ?? employee.imageThumbUrl ?? null;
  const t = await getTranslations("employee_card");

  return (
    employee.name && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.employee}>
            {image != null && (
              <div className={styles.employeeImage}>
                <SanityImage
                  image={{
                    src: { src: image },
                    alt: employee.name,
                  }}
                />
              </div>
            )}
            <div className={styles.employeeInfo}>
              <Text type={"h2"}>{employee.name}</Text>
              {employee.email && (
                <Text type={"bodyBig"} className={styles.employeeEmail}>
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </Text>
              )}
              {employee.telephone && (
                <Text type={"bodyBig"} className={styles.employeeTelephone}>
                  <a href={`tel:${employee.telephone}`}>
                    {formatPhoneNumber(employee.telephone)}
                  </a>
                </Text>
              )}
              {employee.officeName && (
                <Text type={"bodyNormal"} className={styles.employeeRole}>
                  {employee.officeName}
                </Text>
              )}
              {employee.competences.map((competence) => (
                <Text type="bodyNormal" key={competence}>
                  {t.has(competence) ? t(competence) : competence}
                </Text>
              ))}
            </div>
          </div>

          <div className={styles.backToEmployees}>
            <LinkButton
              link={`/${language}/${employeePageSlug}`}
              type="secondary"
              size="M"
              linkTitle={t("see_all_employees")}
            />
          </div>
        </div>
      </div>
    )
  );
}

export async function getEmployeePageSlug(language: string) {
  const employeePageSlug =
    (
      await loadStudioQuery<{ slug: string } | null>(EMPLOYEE_PAGE_SLUG_QUERY, {
        language,
      })
    ).data?.slug ?? "";

  return employeePageSlug;
}
