import { Metadata } from "next";

import CustomErrorMessage from "src/blog/components/customErrorMessage/CustomErrorMessage";
import Legal from "src/blog/components/legal/Legal";
import LegalPreview from "src/blog/components/legal/LegalPreview";
import { homeLink } from "src/blog/components/utils/linkTypes";
import Compensations from "src/compensations/Compensations";
import CompensationsPreview from "src/compensations/CompensationsPreview";
import CustomerCases from "src/customerCases/CustomerCases";
import CustomerCasesPreview from "src/customerCases/CustomerCasesPreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchPageDataFromParams } from "src/utils/pageData";
import SectionRenderer from "src/utils/renderSection";
import { SeoData, generateMetadataFromSeo } from "src/utils/seo";

export const dynamic = "force-dynamic";

type Props = {
  params: { lang: string; path: string[] };
};

function seoDataFromPageData(
  data: Awaited<ReturnType<typeof fetchPageDataFromParams>>,
): SeoData | null {
  if (data === null) {
    return null;
  }
  switch (data.docType) {
    case "customerCase":
      // TODO
      return null;
    case "customerCasesPage":
      // TODO
      return null;
    case "pageBuilder":
      // TODO
      return null;
    case "legalDocument":
      // TODO
      return null;
    case "compensations": {
      return data.queryResponse.compensationsPage.data.seo;
    }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { perspective } = getDraftModeInfo();

  const pageData = await fetchPageDataFromParams({
    language: params.lang,
    path: params.path,
    perspective: perspective ?? "published",
  });

  return generateMetadataFromSeo(seoDataFromPageData(pageData));
}

const Page404 = (
  <CustomErrorMessage
    title="404 — Something went wrong"
    body="The page you are looking for does not exist. There may be an error in the URL, or the page may have been moved or deleted."
    link={homeLink}
  />
);

async function Page({ params }: Props) {
  const { lang, path } = params;

  const { perspective, isDraftMode } = getDraftModeInfo();

  const pageData = await fetchPageDataFromParams({
    language: lang,
    path,
    perspective: perspective ?? "published",
  });

  if (pageData == null) {
    return Page404;
  }

  const { queryResponse, docType } = pageData;

  switch (docType) {
    case "pageBuilder":
      return (
        <>
          {queryResponse.data?.sections?.map((section, index) => (
            <SectionRenderer
              key={section._key}
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
        // TODO: implement customer case detail page
        <pre style={{ background: "hotpink", marginTop: "8rem" }}>
          {JSON.stringify(pageData, null, 2)}
        </pre>
      );
    case "legalDocument":
      return isDraftMode ? (
        <LegalPreview initialDocument={queryResponse} />
      ) : (
        <Legal document={queryResponse.data} />
      );
  }

  return Page404;
}

export default Page;
