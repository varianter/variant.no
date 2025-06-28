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
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { SeoData } from "studio/lib/interfaces/seo";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

export const dynamic = "force-dynamic";

type Props = {
  params: { locale: string; path: string[] };
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { perspective } = getDraftModeInfo();
  const language = params.locale;
  const pageData = await fetchPageDataFromParams({
    language,
    path: params.path,
    perspective: perspective ?? "published",
    hostname: headers().get("host"),
  });
  return generateMetadataFromSeo(seoDataFromPageData(pageData), language);
}

async function Page({ params }: Props) {
  const { locale, path } = params;

  const { perspective, isDraftMode } = getDraftModeInfo();

  const pageData = await fetchPageDataFromParams({
    language: locale,
    path,
    perspective: perspective ?? "published",
    hostname: headers().get("host"),
  });

  if (pageData == null) {
    return notFound();
  }

  const eventPostings: { eventPostings: IEventPosting[] } = {
    eventPostings: [],
  };

  const { data } = await loadStudioQuery<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale });
  eventPostings.eventPostings = data?.eventPostingsArray ?? [];

  const { queryResponse, docType, pathTranslations } = pageData;

  return (
    <>
      <PageHeader language={locale} pathTranslations={pathTranslations} />
      <main id={"main"} tabIndex={-1} className="animate-fadein">
        {(() => {
          switch (docType) {
            case "pageBuilder":
              return (
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
            case "compensations":
              return isDraftMode ? null : (
                <Compensations
                  compensations={queryResponse.compensationsPage.data}
                  locations={queryResponse.companyLocations.data}
                  language={locale}
                />
              );
            case "customerCasesPage":
              return isDraftMode ? (
                <CustomerCasesPreview initialCustomerCases={queryResponse} />
              ) : (
                <CustomerCases customerCasesPage={queryResponse.data} />
              );
            case "customerCase":
              return (
                <CustomerCase
                  customerCase={queryResponse.customerCase.data}
                  customerCasesPagePath={queryResponse.customerCasesPagePath}
                />
              );
            case "legalDocument":
              return isDraftMode ? (
                <LegalPreview initialDocument={queryResponse} />
              ) : (
                <Legal document={queryResponse.data} />
              );
            case "employee":
              return (
                <EmployeePage employee={queryResponse} language={locale} />
              );
            case "eventsPage":
              return (
                <EventsPage params={params} eventPostings={eventPostings} />
              );
          }
          return notFound();
        })()}
      </main>
    </>
  );
}

export default Page;
