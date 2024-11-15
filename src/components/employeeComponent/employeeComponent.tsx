import Image from "next/image";
import Link from "next/link";

import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";

import styles from "./employeeComponent.module.css";

export interface EmployeeComponentProps {
  consultant: ChewbaccaEmployee;
  employeePageSlug?: string;
  language: string;
}

export default function EmployeeComponent({
  consultant,
  employeePageSlug,
  language,
}: EmployeeComponentProps) {
  return (
    consultant.imageUrl &&
    consultant.name &&
    consultant.email && (
      <div className={styles.peopleWrapper}>
        <Link
          href={`/${language}/${employeePageSlug}/${aliasFromEmail(consultant.email)}`}
        >
          <div className={styles.peopleConsultantImage}>
            <Image
              src={consultant.imageUrl}
              alt=""
              style={{ objectFit: "cover" }}
              fill={true}
            />
          </div>
        </Link>
        <div className={styles.peopleConsultantInfoWrapper}>
          <div className={styles.peopleConsultantInfo}>
            <p className={styles.peopleConsultantName}>{consultant.name}</p>
            <div className={styles.peopleConsultantRole}>
              {consultant.competences.map((competence) => (
                <>
                  <Text
                    className={styles.peopleConsultantRoleDot}
                    type="labelRegular"
                    key={competence}
                  >
                    {competence}
                  </Text>
                </>
              ))}
            </div>
          </div>

          <div className={styles.peopleContactInfo}>
            <p>{consultant.email}</p>
            {consultant.telephone && (
              <p>{formatPhoneNumber(consultant.telephone)}</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}
