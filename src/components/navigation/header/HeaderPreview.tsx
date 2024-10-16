"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { Navigation } from "studio/lib/interfaces/navigation";
import { BRAND_ASSETS_QUERY, NAV_QUERY } from "studio/lib/queries/siteSettings";

import { Header } from "./Header";

export default function HeaderPreview({
  initialNav,
  initialBrandAssets,
  currentLanguage,
  pathTranslations,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialBrandAssets: QueryResponseInitial<BrandAssets>;
  currentLanguage: string;
  pathTranslations: InternationalizedString;
}) {
  const { data: newNav } = useQuery<Navigation | null>(
    NAV_QUERY,
    { language: initialNav.data.language },
    { initial: initialNav },
  );
  const { data: newBrandAssets } = useQuery<BrandAssets | null>(
    BRAND_ASSETS_QUERY,
    {},
    { initial: initialBrandAssets },
  );

  return (
    newNav &&
    newBrandAssets && (
      <Header
        navigation={newNav}
        assets={newBrandAssets}
        currentLanguage={currentLanguage}
        pathTranslations={pathTranslations}
      />
    )
  );
}
