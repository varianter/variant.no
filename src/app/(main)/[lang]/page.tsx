import { Metadata } from "next";

import InformationSection from "src/components/informationSection/InformationSection";
import { getDraftModeInfo } from "src/utils/draftmode";
import { isNonNullQueryResponse } from "src/utils/queryResponse";
import SectionRenderer from "src/utils/renderSection";
import { generateMetadataFromSeo } from "src/utils/seo";
import { LinkType } from "studio/lib/interfaces/navigation";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { LANDING_PAGE_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: landingPage } = await loadStudioQuery<PageBuilder | null>(
    LANDING_PAGE_QUERY,
    {
      language: params.lang,
    },
  );
  return generateMetadataFromSeo(landingPage?.seo ?? null, params.lang);
}

const navigationManagerLink = {
  _key: "go-to-navMag",
  _type: "link",
  linkTitle: "Go to Navigation Manager",
  linkType: LinkType.Internal,
  internalLink: { _ref: "studio/structure/siteSettings;navigationManager" },
};

type Props = {
  params: { lang: string };
};

const Home = async ({ params }: Props) => {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const initialLandingPage = await loadStudioQuery<PageBuilder | null>(
    LANDING_PAGE_QUERY,
    { language: params.lang },
    { perspective },
  );

  if (!isNonNullQueryResponse(initialLandingPage)) {
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

  return initialLandingPage.data.sections.map((section, index) => (
    <SectionRenderer
      key={section._key}
      section={section}
      isDraftMode={isDraftMode}
      initialData={initialLandingPage}
      isLandingPage={true}
      sectionIndex={index}
    />
  ));
};

export default Home;
