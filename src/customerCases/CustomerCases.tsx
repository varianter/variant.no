import Text from "src/components/text/Text";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCases: CustomerCasePage;
}

const CustomerCases = ({ customerCases }: CustomerCasesProps) => {
  return (
    <div className={styles.wrapper}>
      <Text type="h1"> {customerCases.basicTitle} </Text>
    </div>
  );
};

export default CustomerCases;
