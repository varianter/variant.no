import { headers } from "next/headers";
import Link from "next/link";

import { SanitySharedImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { sharedCustomerCasesLink } from "src/components/utils/linkTypes";
import { getDraftModeInfo } from "src/utils/draftmode";
import { domainFromHostname } from "src/utils/url";
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

  const domain = domainFromHostname(headers().get("host"));

  const [sharedCustomerCases] = await Promise.all([
    loadSharedQuery<CustomerCaseBase[]>(
      CUSTOMER_CASES_QUERY,
      { language: customerCasesPage.language, domain },
      { perspective },
    ),
  ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Text type="h1"> {customerCasesPage.basicTitle} </Text>
        {sharedCustomerCases && sharedCustomerCases.data.length > 0 ? (
          sharedCustomerCases.data.map((customerCase) => (
            <div key={customerCase._id} className={styles.caseWrapper}>
              <div className={styles.caseImageWrapper}>
                <SanitySharedImage image={customerCase.image} />
              </div>
              <div>
                <Link href={`${customerCasesPage.slug}/${customerCase.slug}`}>
                  <Text type="h2">{customerCase.basicTitle}</Text>
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
