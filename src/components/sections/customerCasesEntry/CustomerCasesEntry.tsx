import { headers } from "next/headers";

import { Locale } from "src/i18n/routing";
import { getDraftModeInfo } from "src/utils/draftmode";
import { domainFromHostname } from "src/utils/url";
import { CUSTOMER_CASES_PAGE_SITEMAP_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { CustomerCaseEntry } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASE_ENTRY_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import CustomerCasesList from "./CustomerCasesList";

interface CustomerCasesProps {
  language: Locale;
}

async function CustomerCasesEntry({ language }: CustomerCasesProps) {
  const { perspective } = getDraftModeInfo();
  const domain = domainFromHostname(headers().get("host"));

  const customerCaseResult = await loadSharedQuery<CustomerCaseEntry[]>(
    CUSTOMER_CASE_ENTRY_QUERY,
    {
      domain,
      language,
    },
    {
      perspective,
    },
  );

  const customerCasePageSlug = (
    await loadStudioQuery<{ slug: string } | null>(
      CUSTOMER_CASES_PAGE_SITEMAP_QUERY,
      {
        language,
      },
    )
  ).data?.slug;

  return (
    customerCaseResult && (
      <div>
        <CustomerCasesList
          customerCases={customerCaseResult.data}
          language={language}
          customerCasePageSlug={customerCasePageSlug}
        />
      </div>
    )
  );
}

export default CustomerCasesEntry;
