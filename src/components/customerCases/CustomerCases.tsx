import Link from "next/link";

import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCasesPage: CustomerCasePage;
  customerCases: CustomerCaseBase[];
}

const CustomerCases = ({
  customerCasesPage,
  customerCases,
}: CustomerCasesProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Text type="titleXL"> {customerCasesPage.basicTitle} </Text>
        {customerCases && customerCases.length > 0 ? (
          customerCases.map((customerCase) => (
            <div key={customerCase._id} className={styles.caseWrapper}>
              <div className={styles.caseImageWrapper}>
                <SanityImage image={customerCase.image} isShared />
              </div>
              <div className={styles.caseTextWrapper}>
                <Link href={`${customerCasesPage.slug}/${customerCase.slug}`}>
                  <Text type="titleL">{customerCase.basicTitle}</Text>
                </Link>
                {customerCase.description && (
                  <Text>{customerCase.description}</Text>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.section}>
            <Text>No customer cases... yet :)</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerCases;
