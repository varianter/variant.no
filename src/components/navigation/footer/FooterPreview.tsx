"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { Navigation } from "studio/lib/payloads/navigation";
import { CompanyInfo } from "studio/lib/payloads/companyDetails";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/companyDetails";
import Footer from "./Footer";
import { SocialMediaProfiles } from "studio/lib/payloads/socialMedia";
import { SOMEPROFILES_QUERY } from "studio/lib/queries/socialMediaProfiles";

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
  initialSoMe,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialCompanyInfo: QueryResponseInitial<CompanyInfo>;
  initialSoMe: QueryResponseInitial<SocialMediaProfiles>;
}) {
  const newNav = useInitialData(NAV_QUERY, initialNav);
  const newCompanyInfo = useInitialData(COMPANY_INFO_QUERY, initialCompanyInfo);
  const newSoMedata = useInitialData(SOMEPROFILES_QUERY, initialSoMe);
  // TODO: add legal preview
  return (
    newNav &&
    newCompanyInfo &&
    newSoMedata && (
      <Footer
        navigationData={newNav}
        companyInfo={newCompanyInfo}
        soMeData={newSoMedata}
        legalData={[]}
      />
    )
  );
}
