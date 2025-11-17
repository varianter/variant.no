import { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import Compensations from "src/components/compensations/Compensations";
import CustomerCase from "src/components/customerCases/customerCase/CustomerCase";
import CustomerCases from "src/components/customerCases/CustomerCases";
import CustomerCasesPreview from "src/components/customerCases/CustomerCasesPreview";
import EmployeePage from "src/components/employeePage/EmployeePage";
import EventsPage from "src/components/eventsPage/eventsPage";
import Legal from "src/components/legal/Legal";
import LegalPreview from "src/components/legal/LegalPreview";
import PageHeader from "src/components/navigation/header/PageHeader";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchPageDataFromParams } from "src/utils/pageData";
import SectionRenderer from "src/utils/renderSection";
import {
  generateMetadataFromSeo,
  seoDataFromChewbaccaEmployee,
  seoDataFromCustomerCase,
} from "src/utils/seo";
import { domainFromHostname } from "src/utils/url";
import { client } from "studio/lib/client";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { SeoData } from "studio/lib/interfaces/seo";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; path: string[] }>;
};

function seoDataFromPageData(
  data: Awaited<ReturnType<typeof fetchPageDataFromParams>>,
): SeoData | null {
  if (data === null) {
    return null;
  }
  switch (data.docType) {
    case "customerCase":
      return seoDataFromCustomerCase(data.queryResponse.customerCase.data);
    case "customerCasesPage":
      return data.queryResponse.data.seo;
    case "pageBuilder":
      return data.queryResponse.data.seo;
    case "compensations":
      return data.queryResponse.compensationsPage.data.seo;
    case "employee":
      return seoDataFromChewbaccaEmployee(data.queryResponse);
    case "eventsPage":
      return data.queryResponse.seo;
    case "legalDocument":
      return null;
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { perspective } = await getDraftModeInfo();
  const language = params.locale;
  const pageData = await fetchPageDataFromParams({
    language,
    path: params.path,
    perspective: perspective ?? "published",
    hostname: (await headers()).get("host"),
  });
  return generateMetadataFromSeo(seoDataFromPageData(pageData), language);
}

async function Page(props: Props) {
  const params = await props.params;
  const { locale, path } = params;

  const { perspective, isDraftMode } = await getDraftModeInfo();

  const pageData = await fetchPageDataFromParams({
    language: locale,
    path,
    perspective: perspective ?? "published",
    hostname: (await headers()).get("host"),
  });

  if (pageData == null) {
    return notFound();
  }

  const eventPostings: { eventPostings: IEventPosting[] } = {
    eventPostings: [],
  };

  const eventPostingsData = await client.fetch<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale }, { perspective });
  eventPostings.eventPostings = eventPostingsData?.eventPostingsArray ?? [];

  const { queryResponse, docType, pathTranslations } = pageData;
  let content = null;
  switch (docType) {
    case "pageBuilder":
      content = (
        <>
          {queryResponse.data?.sections?.map((section, index) => (
            <SectionRenderer
              key={section._key}
              language={locale}
              section={section}
              isDraftMode={isDraftMode}
              initialData={queryResponse}
              isLandingPage={false}
              sectionIndex={index}
            />
          ))}
        </>
      );
      break;
    case "compensations":
      content = isDraftMode ? null : (
        <Compensations
          compensations={queryResponse.compensationsPage.data}
          locations={queryResponse.companyLocations.data}
          language={locale}
        />
      );
      break;
    case "customerCasesPage": {
      const domain = domainFromHostname((await headers()).get("host"));
      const customerCasesListResult = await loadSharedQuery<CustomerCaseBase[]>(
        CUSTOMER_CASES_QUERY,
        { language: locale, domain },
        { perspective },
      );
      content = isDraftMode ? (
        <CustomerCasesPreview
          initialCustomerCases={queryResponse}
          initialCustomerCasesList={customerCasesListResult}
          domain={domain}
        />
      ) : (
        <CustomerCases
          customerCasesPage={queryResponse.data}
          customerCases={customerCasesListResult.data}
        />
      );
      break;
    }
    case "customerCase":
      content = (
        <CustomerCase
          customerCase={queryResponse.customerCase.data}
          customerCasesPagePath={queryResponse.customerCasesPagePath}
        />
      );
      break;
    case "legalDocument":
      content = isDraftMode ? (
        <LegalPreview initialDocument={queryResponse} />
      ) : (
        <Legal document={queryResponse.data} />
      );
      break;
    case "employee":
      content = <EmployeePage employee={queryResponse} language={locale} />;
      break;
    case "eventsPage":
      content = <EventsPage params={params} eventPostings={eventPostings} />;
      break;
  }
  if (content === null) {
    return notFound();
  }

  return (
    <>
      <PageHeader language={locale} pathTranslations={pathTranslations} />
      <main id={"main"} tabIndex={-1} className="animate-fadein">
        {content}
      </main>
    </>
  );
}

export default Page;
