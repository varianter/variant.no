import { getDraftModeInfo } from "src/utils/draftmode";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { Navigation } from "studio/lib/interfaces/navigation";
import { BRAND_ASSETS_QUERY, NAV_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import { Header } from "./Header";
import HeaderPreview from "./HeaderPreview";

interface PageHeaderProps {
  language: string;
  pathTranslations: InternationalizedString;
}

export default async function PageHeader({
  language,
  pathTranslations,
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

  return (
    initialBrandAssets.data !== null &&
    initialNav.data !== null &&
    (isDraftMode ? (
      <HeaderPreview
        initialNav={{
          ...initialNav,
          data: initialNav.data,
        }}
        initialBrandAssets={{
          ...initialBrandAssets,
          data: initialBrandAssets.data,
        }}
        currentLanguage={language}
        pathTranslations={pathTranslations}
      />
    ) : (
      <Header
        navigation={initialNav.data}
        assets={initialBrandAssets.data}
        currentLanguage={language}
        pathTranslations={pathTranslations}
      />
    ))
  );
}
