import { headers } from "next/headers";

import { Locale } from "src/i18n/routing";
import { getDraftModeInfo } from "src/utils/draftmode";
import { domainFromHostname } from "src/utils/url";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import CustomerCasesList from "./CustomerCasesList";

interface CustomerCasesProps {
  language: Locale;
}

async function CustomerCasesEntry({ language }: CustomerCasesProps) {
  const { perspective } = getDraftModeInfo();
  const domain = domainFromHostname(headers().get("host"));

  const [sharedCustomerCases] = await Promise.all([
    loadSharedQuery<CustomerCaseBase[]>(
      CUSTOMER_CASES_QUERY,
      { language: language, domain },
      { perspective },
    ),
  ]);

  return (
    <div>
      <CustomerCasesList customerCases={sharedCustomerCases.data} />
    </div>
  );
}

export default CustomerCasesEntry;
