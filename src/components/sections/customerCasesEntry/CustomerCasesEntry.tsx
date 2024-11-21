import Text from "src/components/text/Text";
import { Locale } from "src/i18n/routing";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

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

  return (
    <div>
      <Text>{sharedCustomerCases.data[1].basicTitle}</Text>
    </div>
  );
}

export default CustomerCasesEntry;
