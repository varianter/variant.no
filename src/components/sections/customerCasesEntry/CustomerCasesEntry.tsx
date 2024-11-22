import { Locale } from "src/i18n/routing";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import CustomerCasesList from "./CustomerCasesList";

interface CustomerCasesProps {
  language: Locale;
}

async function CustomerCasesEntry({ language }: CustomerCasesProps) {
  const [sharedCustomerCases] = await Promise.all([
    loadSharedQuery<CustomerCaseBase[]>(
      CUSTOMER_CASES_QUERY,
      { language: language },
      {},
    ),
  ]);

  console.log(sharedCustomerCases.data);

  return (
    <div>
      <CustomerCasesList customerCases={sharedCustomerCases.data} />
      {/* <Text>{sharedCustomerCases} hei</Text> */}
    </div>
  );
}

export default CustomerCasesEntry;
