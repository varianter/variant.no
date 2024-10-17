import Link from "next/link";

import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { sharedCustomerCasesLink } from "src/components/utils/linkTypes";
import { getDraftModeInfo } from "src/utils/draftmode";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import styles from "./customerCases.module.css";

interface CustomerCasesProps {
  customerCasesPage: CustomerCasePage;
}

const CustomerCases = async ({ customerCasesPage }: CustomerCasesProps) => {
  const { perspective } = getDraftModeInfo();

  const [sharedCustomerCases] = await Promise.all([
    loadSharedQuery<CustomerCaseBase[]>(
      CUSTOMER_CASES_QUERY,
      { language: customerCasesPage.language },
      { perspective },
    ),
  ]);

  return (
    <div className={styles.wrapper}>
      <Text type="h1"> {customerCasesPage.basicTitle} </Text>
      {sharedCustomerCases && sharedCustomerCases.data.length > 0 ? (
        sharedCustomerCases.data.map((customerCase) => (
          <div key={customerCase._id}>
            <Link href={`${customerCasesPage.slug}/${customerCase.slug}`}>
              <Text type="h2">{customerCase.basicTitle}</Text>
            </Link>
            {customerCase.description && (
              <Text>{customerCase.description}</Text>
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
