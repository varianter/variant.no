import { Metadata } from "next";

import InformationSection from "src/blog/components/informationSection/InformationSection";
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { LinkType } from "studio/lib/interfaces/navigation";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { LANDING_QUERY } from "studio/lib/queries/navigation";
import { PAGE_QUERY, SEO_PAGE_QUERY } from "studio/lib/queries/pages";
import { loadQuery } from "studio/lib/store";

export async function generateMetadata(): Promise<Metadata> {
  const { data: landingId } = await loadQuery<string>(LANDING_QUERY);
  const seo = await fetchSeoData(SEO_PAGE_QUERY, { id: landingId });
  return generateMetadataFromSeo(seo);
}

const navigationManagerLink = {
  _key: "go-to-navMag",
  _type: "link",
  linkTitle: "Go to Navigation Manager",
  linkType: LinkType.Internal,
  internalLink: { _ref: "studio/structure/navigationManager" },
};

const pagesLink = {
  _key: "go-to-pages",
  _type: "link",
  linkTitle: "Go to Pages Manager",
  linkType: LinkType.Internal,
  internalLink: { _ref: "studio/structure/pages" },
};

const Home = async () => {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const { data: landingId } = await loadQuery<string>(
    LANDING_QUERY,
    {},
    { perspective },
  );

  if (!landingId) {
    return (
      <InformationSection
        title="Welcome! Velkommen! Välkommen!"
        body={
          "It looks like there's no page set as your landing page in the Studio.\nHead over to the Studio to select a landing page and guide visitors to the right place!"
        }
        link={navigationManagerLink}
      />
    );
  }

  const initialLandingPage = await loadQuery<PageBuilder>(
    PAGE_QUERY,
    { id: landingId },
    { perspective },
  );

  if (!initialLandingPage.data) {
    return (
      <InformationSection
        title="Landing Page is Missing Content"
        body={`Your landing page is set, but it looks like there’s no content yet.\n Visit the Studio to start adding content and make your landing page come to life!`}
        link={pagesLink}
      />
    );
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
