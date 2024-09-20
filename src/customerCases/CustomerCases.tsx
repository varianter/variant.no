import { sharedCustomerCasesLink } from "src/blog/components/utils/linkTypes";
import LinkButton from "src/components/linkButton/LinkButton";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { getDraftModeInfo } from "src/utils/draftmode";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCasesPage: CustomerCasePage;
}

const CustomerCases = async ({ customerCasesPage }: CustomerCasesProps) => {
  const { perspective } = getDraftModeInfo();

  const [sharedCustomerCases] = await Promise.all([
    loadSharedQuery<CustomerCase[]>(CUSTOMER_CASES_QUERY, {}, { perspective }),
  ]);

  return (
    <div className={styles.wrapper}>
      <Text type="h1"> {customerCasesPage.basicTitle} </Text>
      {sharedCustomerCases && sharedCustomerCases.data.length > 0 ? (
        sharedCustomerCases.data.map((customerCase: CustomerCase) => (
          <div key={customerCase._id}>
            <Text type="h2">{customerCase.basicTitle}</Text>
            {customerCase.richText && (
              <RichText value={customerCase.richText} />
            )}
          </div>
        ))
      ) : (
        <div className={styles.section}>
          <Text>
            It looks like you haven&apos;t created any customer cases yet.
            Please visit the shared studio to add some.
          </Text>
          <LinkButton link={sharedCustomerCasesLink} />
        </div>
      )}
    </div>
  );
};

export default CustomerCases;
