"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import Footer from "src/components/navigation/footer/Footer";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import {
  CompanyInfo,
  CompanyLocation,
} from "studio/lib/interfaces/companyDetails";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { Navigation } from "studio/lib/interfaces/navigation";
import { SocialMediaProfiles } from "studio/lib/interfaces/socialMedia";
import {
  COMPANY_INFO_QUERY,
  COMPANY_LOCATIONS_QUERY,
  LEGAL_DOCUMENTS_BY_LANG_QUERY,
} from "studio/lib/queries/admin";
import {
  BRAND_ASSETS_QUERY,
  NAV_QUERY,
  SOME_PROFILES_QUERY,
} from "studio/lib/queries/siteSettings";

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
  initialLegal,
  language,
  initialCompanyLocations,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialCompanyInfo: QueryResponseInitial<CompanyInfo>;
  initialBrandAssets: QueryResponseInitial<BrandAssets>;
  initialSoMe: QueryResponseInitial<SocialMediaProfiles | null>;
  initialLegal: QueryResponseInitial<LegalDocument[] | null>;
  language: string;
  initialCompanyLocations: QueryResponseInitial<CompanyLocation[]>;
}) {
  const { data: newNav } = useQuery(
    NAV_QUERY,
    { language },
    { initial: initialNav },
  );
  const newCompanyInfo = useInitialData(COMPANY_INFO_QUERY, initialCompanyInfo);
  const newBrandAssets = useInitialData(BRAND_ASSETS_QUERY, initialBrandAssets);
  const newSoMedata = useInitialData(SOME_PROFILES_QUERY, initialSoMe);
  const newCompanyLocations = useInitialData(
    COMPANY_LOCATIONS_QUERY,
    initialCompanyLocations,
  );

  const { data: newLegal } = useQuery(
    LEGAL_DOCUMENTS_BY_LANG_QUERY,
    { language },
    { initial: initialLegal },
  );
  return (
    newNav &&
    newCompanyInfo &&
    newBrandAssets &&
    newSoMedata &&
    newLegal &&
    newCompanyLocations && (
      <Footer
        navigationData={newNav}
        companyInfo={newCompanyInfo}
        companyLocations={newCompanyLocations}
        /* brandAssets={newBrandAssets} */
        soMeData={newSoMedata}
        legalData={newLegal}
      />
    )
  );
}
