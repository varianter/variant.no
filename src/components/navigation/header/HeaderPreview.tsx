"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { Navigation } from "studio/lib/interfaces/navigation";
import { BRAND_ASSETS_QUERY, NAV_QUERY } from "studio/lib/queries/siteSettings";

import { Header } from "./Header";

export default function HeaderPreview({
  initialNav,
  initialBrandAssets,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialBrandAssets: QueryResponseInitial<BrandAssets>;
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
    newNav && newBrandAssets && <Header data={newNav} assets={newBrandAssets} />
  );
}
