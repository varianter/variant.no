import { Metadata } from "next";

import CustomErrorMessage from "src/components/customErrorMessage/CustomErrorMessage";
import InformationSection from "src/components/informationSection/InformationSection";
import { homeLink } from "src/components/utils/linkTypes";
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { client } from "studio/lib/client";
import { LinkType } from "studio/lib/interfaces/navigation";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import { PAGE_QUERY, PAGE_SEO_QUERY } from "studio/lib/queries/pages";
import {
  LANDING_PAGE_REF_QUERY,
  LANGUAGES_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

export async function generateMetadata(): Promise<Metadata> {
  const { data: landingId } = await loadStudioQuery<string>(
    LANDING_PAGE_REF_QUERY,
  );
  const seo = await fetchSeoData(PAGE_SEO_QUERY, { id: landingId });
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

type Props = {
  params: { lang: string; slug: string };
};

const Page404 = (
  <CustomErrorMessage
    title="404 — Something went wrong"
    body="The page you are looking for does not exist. There may be an error in the URL, or the page may have been moved or deleted."
    link={homeLink}
  />
);

const Home = async ({ params }: Props) => {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const language = (
    await client.fetch<LanguageObject[] | null>(LANGUAGES_QUERY)
  )?.find((l) => l.id === params.lang);

  if (language === undefined) {
    return Page404;
  }

  const { data: landingId } = await loadStudioQuery<string>(
    LANDING_PAGE_REF_QUERY,
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

  const initialLandingPage = await loadStudioQuery<PageBuilder>(
    PAGE_QUERY,
    { id: landingId, language: params.lang },
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
