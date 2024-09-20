"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { CompanyInfo } from "studio/lib/interfaces/companyDetails";
import { Navigation } from "studio/lib/interfaces/navigation";
import { SocialMediaProfiles } from "studio/lib/interfaces/socialMedia";
import { BRAND_ASSETS_QUERY } from "studio/lib/queries/brandAssets";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/companyDetails";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { SOMEPROFILES_QUERY } from "studio/lib/queries/socialMediaProfiles";

import Footer from "./Footer";

function useInitialData<T>(
  query: string,
  initialData: QueryResponseInitial<T>,
): T | null {
  const { data } = useQuery<T | null>(query, {}, { initial: initialData });
  return data;
}

export default function FooterPreview({
  initialNav,
  initialCompanyInfo,
  initialBrandAssets,
  initialSoMe,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialCompanyInfo: QueryResponseInitial<CompanyInfo>;
  initialBrandAssets: QueryResponseInitial<BrandAssets>;
  initialSoMe: QueryResponseInitial<SocialMediaProfiles | null>;
}) {
  const newNav = useInitialData(NAV_QUERY, initialNav);
  const newCompanyInfo = useInitialData(COMPANY_INFO_QUERY, initialCompanyInfo);
  const newBrandAssets = useInitialData(BRAND_ASSETS_QUERY, initialBrandAssets);
  const newSoMedata = useInitialData(SOMEPROFILES_QUERY, initialSoMe);
  // TODO: add legal preview
  return (
    newNav &&
    newCompanyInfo &&
    newBrandAssets &&
    newSoMedata && (
      <Footer
        navigationData={newNav}
        companyInfo={newCompanyInfo}
        brandAssets={newBrandAssets}
        soMeData={newSoMedata}
        legalData={[]}
      />
    )
  );
}
