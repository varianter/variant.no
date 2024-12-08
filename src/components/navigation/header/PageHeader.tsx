import { getDraftModeInfo } from "src/utils/draftmode";
import { isNonNullQueryResponse } from "src/utils/queryResponse";
import { Announcement } from "studio/lib/interfaces/announcement";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { Navigation } from "studio/lib/interfaces/navigation";
import { COMPANY_EMAIL_QUERY } from "studio/lib/queries/admin";
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

  const initialAnnouncement = await loadStudioQuery<Announcement | null>(
    ANNOUNCEMENT_QUERY,
    { language },
    { perspective },
  );

  const initialCompanyEmail = await loadStudioQuery<
    { companyEmail: string } | undefined
  >(COMPANY_EMAIL_QUERY, {}, { perspective });

  return (
    isNonNullQueryResponse(initialBrandAssets) &&
    isNonNullQueryResponse(initialNav) &&
    (isDraftMode ? (
      <HeaderPreview
        initialNav={initialNav}
        initialBrandAssets={initialBrandAssets}
        initialAnnouncement={initialAnnouncement}
        currentLanguage={language}
        pathTranslations={pathTranslations}
        contactEmail={initialCompanyEmail.data?.companyEmail}
      />
    ) : (
      <Header
        navigation={initialNav.data}
        assets={initialBrandAssets.data}
        announcement={initialAnnouncement.data}
        currentLanguage={language}
        pathTranslations={pathTranslations}
        contactEmail={initialCompanyEmail.data?.companyEmail}
      />
    ))
  );
}
