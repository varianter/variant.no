"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { Navigation } from "studio/lib/payloads/navigation";
import { SiteSettings } from "studio/lib/payloads/siteSettings";
import { SITESETTINGS_QUERY } from "studio/lib/queries/siteSettings";
import Footer from "./Footer";
import { SocialMediaProfiles } from "studio/lib/payloads/socialMedia";
import { SOMEPROFILES_QUERY } from "studio/lib/queries/socialMediaProfiles";

function useInitialData<T>(
  query: string,
  initialData: QueryResponseInitial<T>
): T | null {
  const { data } = useQuery<T | null>(query, {}, { initial: initialData });
  return data;
}

export default function FooterPreview({
  initialNav,
  initialSiteSetting,
  initialSoMe,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialSiteSetting: QueryResponseInitial<SiteSettings>;
  initialSoMe: QueryResponseInitial<SocialMediaProfiles>;
}) {
  const newNav = useInitialData(NAV_QUERY, initialNav);
  const newSiteSettings = useInitialData(
    SITESETTINGS_QUERY,
    initialSiteSetting
  );
  const newSoMedata = useInitialData(SOMEPROFILES_QUERY, initialSoMe);
  // TODO: add legal preview
  return (
    newNav &&
    newSiteSettings &&
    newSoMedata && (
      <Footer
        navigationData={newNav}
        siteSettings={newSiteSettings}
        soMeData={newSoMedata}
        legalData={[]}
      />
    )
  );
}
