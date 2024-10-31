import Image from "next/image";
import Link from "next/link";

import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";
import { LinkType } from "studio/lib/interfaces/navigation";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./customerCaseConsulants.module.css";

export interface CustomerCaseConsultantsProps {
  language: string;
  consultants: ChewbaccaEmployee[];
}

export default async function CustomerCaseConsultants({
  language,
  consultants,
}: CustomerCaseConsultantsProps) {
  const employeePageSlugRes = await loadStudioQuery<{ slug: string } | null>(
    EMPLOYEE_PAGE_SLUG_QUERY,
    {
      language,
    },
  );
  const employeePageSlug = employeePageSlugRes.data?.slug;

  return (
    <div className={styles.wrapper}>
      <Text type={"h3"}>Varianter på prosjektet</Text>
      <div className={styles.content}>
        {consultants.map((consultant) => {
          const title = (
            <p className={styles.consultantName}>{consultant.name}</p>
          );
          return (
            consultant.imageThumbUrl &&
            consultant.name &&
            consultant.email && (
              <div key={consultant.email} className={styles.consultant}>
                <div className={styles.consultantImage}>
                  <Image
                    src={consultant.imageUrl ?? consultant.imageThumbUrl}
                    alt={consultant.name}
                    objectFit="cover"
                    fill={true}
                  />
                </div>
                <div className={styles.consultantInfo}>
                  {employeePageSlug !== undefined ? (
                    <Link
                      href={`/${language}/${employeePageSlug}/${aliasFromEmail(consultant.email)}`}
                    >
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                  {consultant.officeName && (
                    <p className={styles.consultantRole}>
                      {consultant.officeName}
                    </p>
                  )}
                  {consultant.email && (
                    <p className={styles.consultantEmail}>{consultant.email}</p>
                  )}
                  {consultant.telephone && (
                    <p className={styles.consultantTelephone}>
                      {consultant.telephone}
                    </p>
                  )}
                  <CustomLink
                    size={"small"}
                    link={{
                      _key: "go-to-mini-cv",
                      _type: "link",
                      linkType: LinkType.Internal,
                      linkTitle: "Gå til Mini-CV",
                      internalLink: {
                        _ref: `${language}/${employeePageSlug}/${aliasFromEmail(consultant.email)}`,
                      },
                    }}
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
