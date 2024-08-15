import { getDraftModeInfo } from "src/utils/draftmode";
import { LANDING_QUERY } from "studio/lib/queries/navigation";
import { PAGE_QUERY, SEO_PAGE_QUERY } from "studio/lib/queries/pages";
import { PageBuilder } from "studio/lib/payloads/pages";
import SectionRenderer from "src/utils/renderSection";
import { loadQuery } from "studio/lib/store";
import { Metadata } from "next";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { ErrorMessage } from '../../components/errorMessage/ErrorMessage';
import { LinkType } from '../../../studio/lib/payloads/navigation';

const studioLink = {
  _key: 'go-to-sanity-studio',
  _type: 'link',
  linkTitle: 'Go to Studio',
  linkType: LinkType.Internal,
  internalLink: {
    _ref: 'studio',
  },
};

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
    return (
      <ErrorMessage
        title={'Missing Content'}
        description={`Navigate to Sanity Studio to add the following: landing page id`}
        link={studioLink}
      />
    )
  }

  const initialLandingPage = await loadQuery<PageBuilder>(
    PAGE_QUERY,
    { id: landingId },
    { perspective }
  );

  if (!initialLandingPage) {
    return (
      <ErrorMessage
        title={'Missing Content'}
        description={`Navigate to Sanity Studio to add the following: page for id '${landingId}'`}
        link={studioLink}
      />
    )
  }

  if (!initialLandingPage.data.sections) {
    return (
      <ErrorMessage
        title={'Missing Content'}
        description={`Navigate to Sanity Studio to add the following: sections for landing page`}
        link={studioLink}
      />
    )
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
