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
import { getPageDataFromParams } from "src/utils/path";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { SEO_SLUG_QUERY } from "studio/lib/queries/pages";

export const dynamic = "force-dynamic";

type Props = {
  params: { lang: string; path: string[] };
};

function deprecated__slugFromPath(path: string[]) {
  return path[0];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = await fetchSeoData(SEO_SLUG_QUERY, {
    slug: deprecated__slugFromPath(params.path),
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

  const pageData = await getPageDataFromParams(
    lang,
    path,
    perspective ?? "published",
  );

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
        />
      ) : (
        <Compensations
          compensations={queryResponse.compensationsPage.data}
          locations={queryResponse.companyLocations.data}
        />
      );
    case "customerCasesPage":
      return isDraftMode ? (
        <CustomerCasesPreview initialCustomerCases={queryResponse} />
      ) : (
        <CustomerCases customerCasesPage={queryResponse.data} />
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
