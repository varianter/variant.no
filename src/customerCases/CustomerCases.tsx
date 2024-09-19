import Text from "src/components/text/Text";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCases: CustomerCasePage;
  sharedCustomerCases: CustomerCase;
}

const CustomerCases = async ({
  customerCases,
  sharedCustomerCases,
}: CustomerCasesProps) => {
  //   const { perspective, isDraftMode } = getDraftModeInfo();
  //   //   const [initialSharedCustomerCases] = await Promise.all([
  //   //     loadSharedQuery<CustomerCase>(CUSTOMER_CASES_QUERY, {}, { perspective }),
  //   //   ]);

  //   console.log("customerCases", customerCases);
  //   console.log("shared", initialSharedCustomerCases);

  console.log(sharedCustomerCases);
  return (
    <div className={styles.wrapper}>
      <Text type="h1"> {customerCases.basicTitle} </Text>
    </div>
  );
};

export default CustomerCases;
