"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { Navigation } from "studio/lib/payloads/navigation";
import { Header } from "./Header";
import { SiteSettings } from "studio/lib/payloads/siteSettings";
import { SITESETTINGS_QUERY } from "studio/lib/queries/siteSettings";

export default function HeaderPreview({
  initialNav,
  initialSiteSetting,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialSiteSetting: QueryResponseInitial<SiteSettings>;
}) {
  const { data: newNav } = useQuery<Navigation | null>(
    NAV_QUERY,
    {},
    { initial: initialNav },
  );
  const { data: newSiteSettings } = useQuery<SiteSettings | null>(
    SITESETTINGS_QUERY,
    {},
    { initial: initialSiteSetting },
  );

  return (
    newNav &&
    newSiteSettings && (
      <Header data={newNav} assets={newSiteSettings.brandAssets} />
    )
  );
}
