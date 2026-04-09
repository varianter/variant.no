import { headers } from "next/headers";

import Text from "src/components/text/Text";
import { Locale } from "src/i18n/routing";
import { getDraftModeInfo } from "src/utils/draftmode";
import { domainFromHostname } from "src/utils/url";
import { CustomerCasesEntrySection } from "studio/lib/interfaces/pages";
import { CUSTOMER_CASES_PAGE_SITEMAP_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { CustomerCaseEntry } from "studioShared/lib/interfaces/customerCases";
import {
  CUSTOMER_CASE_ENTRY_QUERY,
  FRONTPAGE_FEATURED_CASES_QUERY,
} from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

import styles from "./customerCasesEntry.module.css";
import CustomerCasesList from "./CustomerCasesList";

interface CustomerCasesProps {
  language: Locale;
  section: CustomerCasesEntrySection;
}

async function CustomerCasesEntry({ language, section }: CustomerCasesProps) {
  const { perspective } = await getDraftModeInfo();
  const domain = domainFromHostname((await headers()).get("host"));

  let customerCases: CustomerCaseEntry[] = [];

  try {
    const featuredCasesResult = await loadSharedQuery<
      CustomerCaseEntry[] | null
    >(FRONTPAGE_FEATURED_CASES_QUERY, { language, domain }, { perspective });

    if (featuredCasesResult.data && featuredCasesResult.data.length > 0) {
      customerCases = featuredCasesResult.data;
    }
  } catch {
    // Singleton document may not exist yet
  }

  if (customerCases.length === 0) {
    const allCasesResult = await loadSharedQuery<CustomerCaseEntry[]>(
      CUSTOMER_CASE_ENTRY_QUERY,
      { domain, language },
      { perspective },
    );
    customerCases = allCasesResult.data ?? [];
  }

  const customerCasePageSlug = (
    await loadStudioQuery<{ slug: string } | null>(
      CUSTOMER_CASES_PAGE_SITEMAP_QUERY,
      {
        language,
      },
    )
  ).data?.slug;

  return (
    customerCases.length > 0 && (
      <div className={styles.firstWrapper}>
        <div className={styles.titleWrapper}>
          <Text type="titleM" as="h2">
            {section.basicTitle}
          </Text>
        </div>
        <CustomerCasesList
          customerCases={customerCases}
          language={language}
          customerCasePageSlug={customerCasePageSlug}
        />
      </div>
    )
  );
}

export default CustomerCasesEntry;
