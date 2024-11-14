
import Image from "next/image";
import { ChewbaccaEmployee } from "src/types/employees";

import styles from "./employeeComponent.module.css"
import formatPhoneNumber from "../utils/formatPhoneNumber";
import Text from "src/components/text/Text";


export interface EmployeeComponentProps {
    consultant: ChewbaccaEmployee;
    employeePageSlug?: string;
}


export default function EmployeeComponent({
    consultant,
    employeePageSlug
}: EmployeeComponentProps) {

    return (
        consultant.imageUrl &&
        consultant.name &&
        consultant.email && (
            <div className={styles.peopleWrapper}>
                <div className={styles.peopleConsultantImage}>
                    <Image
                        src={consultant.imageUrl}
                        alt=""
                        style={{ objectFit: "cover" }}
                        fill={true}
                    />
                </div>
                <div className={styles.peopleConsultantInfoWrapper}>
                   
                    <div className={styles.peopleConsultantInfo}>
                       
                        <p className={styles.peopleConsultantName}>
                            {consultant.name}
                        </p>
                        
                        {consultant.competences.map((competence) => (
                            <Text type="labelRegular" key={competence}>
                                {competence}
                            </Text>
                        ))}
                    </div>


                    <div className={styles.peopleContactInfo}>
                        
                        <p>
                            {consultant.email}
                        </p>
                        {consultant.telephone &&
                            <p>
                                {formatPhoneNumber(consultant.telephone)}
                            </p>
                        }
                    </div>
                </div>
            </div>
        )

    )
}

