import Image from "next/image";

import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./customerCaseConsulants.module.css";

export interface CustomerCaseConsultantsProps {
  consultants: ChewbaccaEmployee[];
}

export default function CustomerCaseConsultants({
  consultants,
}: CustomerCaseConsultantsProps) {
  return (
    <div className={styles.wrapper}>
      <Text type={"h3"}>Varianter på prosjektet</Text>
      <div className={styles.content}>
        {consultants.map(
          (consultant) =>
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
                  <p className={styles.consultantName}>{consultant.name}</p>
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
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
