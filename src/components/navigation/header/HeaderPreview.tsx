"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { Announcement } from "studio/lib/interfaces/announcement";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { Navigation } from "studio/lib/interfaces/navigation";
import {
  ANNOUNCEMENT_QUERY,
  BRAND_ASSETS_QUERY,
  NAV_QUERY,
} from "studio/lib/queries/siteSettings";

import { Header } from "./Header";

export default function HeaderPreview({
  initialNav,
  initialBrandAssets,
  initialAnnouncement,
  currentLanguage,
  pathTitles,
  pathTranslations,
  showBreadcrumbs,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialBrandAssets: QueryResponseInitial<BrandAssets>;
  initialAnnouncement: QueryResponseInitial<Announcement | null>;
  currentLanguage: string;
  pathTitles: string[];
  pathTranslations: InternationalizedString;
  showBreadcrumbs: boolean;
}) {
  const { data: newNav } = useQuery<Navigation | null>(
    NAV_QUERY,
    { language: currentLanguage },
    { initial: initialNav },
  );
  const { data: newBrandAssets } = useQuery<BrandAssets | null>(
    BRAND_ASSETS_QUERY,
    {},
    { initial: initialBrandAssets },
  );
  const { data: newAnnouncement } = useQuery<Announcement | null>(
    ANNOUNCEMENT_QUERY,
    { language: currentLanguage },
    { initial: initialAnnouncement },
  );

  return (
    newNav &&
    newBrandAssets && (
      <Header
        navigation={newNav}
        assets={newBrandAssets}
        announcement={newAnnouncement}
        currentLanguage={currentLanguage}
        pathTitles={pathTitles}
        pathTranslations={pathTranslations}
        showBreadcrumbs={showBreadcrumbs}
      />
    )
  );
}
