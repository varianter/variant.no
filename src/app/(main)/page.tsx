import { getDraftModeInfo } from "src/utils/draftmode";
import { LANDING_QUERY } from "studio/lib/queries/navigation";
import { PAGE_QUERY, SEO_PAGE_QUERY } from "studio/lib/queries/pages";
import { PageBuilder, SEO } from "studio/lib/payloads/pages";
import SectionRenderer from "src/utils/renderSection";
import { loadQuery } from "studio/lib/store";
import { Metadata, ResolvingMetadata } from "next";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { MissingData } from 'src/components/missingData/MissingData';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: landingId } = await loadQuery<string>(LANDING_QUERY);
  const seo = await fetchSeoData(SEO_PAGE_QUERY, { id: landingId });

  return generateMetadataFromSeo(seo);
}

const Home = async () => {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const { data: landingId } = await loadQuery<string>(
    LANDING_QUERY,
    {},
    { perspective }
  );

  if (!landingId) {
    return <MissingData description={"Landing page id"} />
  }

  const initialLandingPage = await loadQuery<PageBuilder>(
    PAGE_QUERY,
    { id: landingId },
    { perspective }
  );

  if (!initialLandingPage) {
    return <MissingData description={`Page for id '${landingId}'`} />
  }

  if (!initialLandingPage.data.sections) {
    return <MissingData description={`Sections for landing page`} />
  }

  return initialLandingPage.data.sections.map((section, index) => {
    return (
      <SectionRenderer
        key={section._key}
        section={section}
        isDraftMode={isDraftMode}
        initialData={initialLandingPage}
        isLandingPage={true}
        sectionIndex={index}
      />
    );
  });
};

export default Home;
