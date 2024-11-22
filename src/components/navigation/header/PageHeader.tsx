import { getDraftModeInfo } from "src/utils/draftmode";
import { isNonNullQueryResponse } from "src/utils/queryResponse";
import { Announcement } from "studio/lib/interfaces/announcement";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { Navigation } from "studio/lib/interfaces/navigation";
import {
  ANNOUNCEMENT_QUERY,
  BRAND_ASSETS_QUERY,
  NAV_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import { Header } from "./Header";
import HeaderPreview from "./HeaderPreview";

interface PageHeaderProps {
  language: string;
  pathTitles: string[];
  pathTranslations: InternationalizedString;
  showBreadcrumbs: boolean;
}

export default async function PageHeader({
  language,
  pathTitles,
  pathTranslations,
  showBreadcrumbs,
}: PageHeaderProps) {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const initialNav = await loadStudioQuery<Navigation | null>(
    NAV_QUERY,
    { language },
    { perspective },
  );

  const initialBrandAssets = await loadStudioQuery<BrandAssets | null>(
    BRAND_ASSETS_QUERY,
    {},
    { perspective },
  );

  const initialAnnouncement = await loadStudioQuery<Announcement | null>(
    ANNOUNCEMENT_QUERY,
    { language },
    { perspective },
  );

  return (
    isNonNullQueryResponse(initialBrandAssets) &&
    isNonNullQueryResponse(initialNav) &&
    (isDraftMode ? (
      <HeaderPreview
        initialNav={initialNav}
        initialBrandAssets={initialBrandAssets}
        initialAnnouncement={initialAnnouncement}
        currentLanguage={language}
        pathTitles={pathTitles}
        pathTranslations={pathTranslations}
        showBreadcrumbs={showBreadcrumbs}
      />
    ) : (
      <Header
        navigation={initialNav.data}
        assets={initialBrandAssets.data}
        announcement={initialAnnouncement.data}
        currentLanguage={language}
        pathTitles={pathTitles}
        pathTranslations={pathTranslations}
        showBreadcrumbs={showBreadcrumbs}
      />
    ))
  );
}