import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import CustomLink from "src/components/link/CustomLink";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";
import { LinkType } from "studio/lib/interfaces/navigation";

import styles from "./consultantCard.module.css";

export interface ConsultantCardProps {
  currentLanguage: string;
  consultant: ChewbaccaEmployee;
  employeePageSlug?: string;
}

export default function ConsultantCard({
  currentLanguage,
  consultant,
  employeePageSlug,
}: ConsultantCardProps) {
  const title = <p className={styles.consultantName}>{consultant.name}</p>;
  const t = useTranslations("custom_link");

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
              href={`/${currentLanguage}/${employeePageSlug}/${aliasFromEmail(consultant.email)}`}
            >
              {title}
            </Link>
          ) : (
            title
          )}
          {consultant.officeName && (
            <p className={styles.consultantRole}>{consultant.officeName}</p>
          )}
          {consultant.email && (
            <p className={styles.consultantEmail}>{consultant.email}</p>
          )}
          {consultant.telephone && (
            <p className={styles.consultantTelephone}>{consultant.telephone}</p>
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
                  _ref: `${employeePageSlug}/${aliasFromEmail(consultant.email)}`,
                },
              }}
            />
          )}
        </div>
      </div>
    )
  );
}
