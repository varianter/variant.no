import { Metadata } from "next";
import { headers } from "next/headers";

import Compensations from "src/components/compensations/Compensations";
import CompensationsPreview from "src/components/compensations/CompensationsPreview";
import CustomerCase from "src/components/customerCases/customerCase/CustomerCase";
import CustomerCases from "src/components/customerCases/CustomerCases";
import CustomerCasesPreview from "src/components/customerCases/CustomerCasesPreview";
import CustomErrorMessage from "src/components/customErrorMessage/CustomErrorMessage";
import EmployeePage from "src/components/employeePage/EmployeePage";
import Legal from "src/components/legal/Legal";
import LegalPreview from "src/components/legal/LegalPreview";
import PageHeader from "src/components/navigation/header/PageHeader";
import { homeLink } from "src/components/utils/linkTypes";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchPageDataFromParams } from "src/utils/pageData";
import SectionRenderer from "src/utils/renderSection";
import {
  SeoData,
  generateMetadataFromSeo,
  seoDataFromChewbaccaEmployee,
  seoDataFromCustomerCase,
} from "src/utils/seo";

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

const Page404 = (
  <CustomErrorMessage
    title="404 — Something went wrong"
    body="The page you are looking for does not exist. There may be an error in the URL, or the page may have been moved or deleted."
    link={homeLink}
  />
);

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
    return Page404;
  }

  const { queryResponse, docType, pathTranslations } = pageData;

  return (
    <>
      <PageHeader language={locale} pathTranslations={pathTranslations} />
      <main id={"main"} tabIndex={-1}>
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
              return isDraftMode ? (
                <CompensationsPreview
                  initialCompensations={queryResponse.compensationsPage}
                  initialLocations={queryResponse.companyLocations}
                  initialLocale={queryResponse.locale}
                />
              ) : (
                <Compensations
                  compensations={queryResponse.compensationsPage.data}
                  locations={queryResponse.companyLocations.data}
                  locale={queryResponse.locale.data}
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
              return <EmployeePage employee={queryResponse} />;
          }
          return Page404;
        })()}
      </main>
    </>
  );
}

export default Page;
