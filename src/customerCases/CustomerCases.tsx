import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCases: CustomerCasePage;
  sharedCustomerCases: CustomerCase[];
}

const CustomerCases = async ({
  customerCases,
  sharedCustomerCases,
}: CustomerCasesProps) => {
  return (
    <div className={styles.wrapper}>
      <Text type="h1"> {customerCases.basicTitle} </Text>
      {sharedCustomerCases.map((customerCase: CustomerCase) => (
        <div key={customerCase._id}>
          <Text type="h2">{customerCase.basicTitle}</Text>
          {customerCase.richText && <RichText value={customerCase.richText} />}
        </div>
      ))}
    </div>
  );
};

export default CustomerCases;
