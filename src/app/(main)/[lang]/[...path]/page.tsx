import { Metadata } from "next";

import Compensations from "src/components/compensations/Compensations";
import CompensationsPreview from "src/components/compensations/CompensationsPreview";
import CustomerCases from "src/components/customerCases/CustomerCases";
import CustomerCasesPreview from "src/components/customerCases/CustomerCasesPreview";
import CustomErrorMessage from "src/components/customErrorMessage/CustomErrorMessage";
import Legal from "src/components/legal/Legal";
import LegalPreview from "src/components/legal/LegalPreview";
import { homeLink } from "src/components/utils/linkTypes";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchPageDataFromParams } from "src/utils/pageData";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { SEO_SLUG_QUERY } from "studio/lib/queries/pages";

export const dynamic = "force-dynamic";

type Props = {
  params: { lang: string; path: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = await fetchSeoData(SEO_SLUG_QUERY, {
    // TODO: handle full path, not just the first slug
    slug: params.path[0],
  });

  return generateMetadataFromSeo(seo);
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
