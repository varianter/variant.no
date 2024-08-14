import { getDraftModeInfo } from "src/utils/draftmode";
import { LANDING_QUERY } from "studio/lib/queries/navigation";
import { PAGE_QUERY, SEO_PAGE_QUERY } from "studio/lib/queries/pages";
import { PageBuilder } from "studio/lib/payloads/pages";
import SectionRenderer from "src/utils/renderSection";
import { loadQuery } from "studio/lib/store";
import { Metadata } from "next";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";

import { MissingContentErrorMessage } from '../../components/missingContentErrorMessage/MissingContentErrorMessage';

export async function generateMetadata(): Promise<Metadata> {
  const { data: landingId } = await loadQuery<string>(LANDING_QUERY);
  const seo = await fetchSeoData(SEO_PAGE_QUERY, { id: landingId });

  return generateMetadataFromSeo(seo);
}

// TODO: Replace with an actual component, this is just a placeholder.
const NewTemplatePlaceholder = () => (
  <div>
    <h1>Welcome to Your New Site Setup!</h1>
    <p>
      {` It looks like you haven't set up your landing page yet. Let's get started!`}
    </p>
  </div>
);

const Home = async () => {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const { data: landingId } = await loadQuery<string>(
    LANDING_QUERY,
    {},
    { perspective }
  );

  if (!landingId) {
    return <MissingContentErrorMessage description={"Landing page id"} />
  }

  const initialLandingPage = await loadQuery<PageBuilder>(
    PAGE_QUERY,
    { id: landingId },
    { perspective }
  );

  if (!initialLandingPage) {
    return <MissingContentErrorMessage description={`Page for id '${landingId}'`} />
  }

  if (!initialLandingPage.data.sections) {
    return <MissingContentErrorMessage description={`Sections for landing page`} />
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
