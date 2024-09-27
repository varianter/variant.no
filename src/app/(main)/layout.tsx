import Footer from "src/components/navigation/footer/Footer";
import FooterPreview from "src/components/navigation/footer/FooterPreview";
import { Header } from "src/components/navigation/header/Header";
import HeaderPreview from "src/components/navigation/header/HeaderPreview";
import SkipToMain from "src/components/skipToMain/SkipToMain";
import { getDraftModeInfo } from "src/utils/draftmode";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { CompanyInfo } from "studio/lib/interfaces/companyDetails";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { Navigation } from "studio/lib/interfaces/navigation";
import { SocialMediaProfiles } from "studio/lib/interfaces/socialMedia";
import {
  COMPANY_INFO_QUERY,
  LEGAL_DOCUMENTS_BY_LANG_QUERY,
} from "studio/lib/queries/admin";
import {
  BRAND_ASSETS_QUERY,
  NAV_QUERY,
  SOME_PROFILES_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./layout.module.css";

const hasValidData = (data: unknown) => data && Object.keys(data).length > 0;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [
    initialNav,
    initialCompanyInfo,
    initialSoMe,
    initialLegal,
    initialBrandAssets,
  ] = await Promise.all([
    loadStudioQuery<Navigation>(NAV_QUERY, {}, { perspective }),
    loadStudioQuery<CompanyInfo>(COMPANY_INFO_QUERY, {}, { perspective }),
    loadStudioQuery<SocialMediaProfiles | null>(
      SOME_PROFILES_QUERY,
      {},
      { perspective },
    ),
    loadStudioQuery<LegalDocument[]>(
      LEGAL_DOCUMENTS_BY_LANG_QUERY,
      { language: "en" }, //TODO: replace this with selected language for the page
      { perspective },
    ),
    loadStudioQuery<BrandAssets>(BRAND_ASSETS_QUERY, {}, { perspective }),
  ]);

  const hasNavData = hasValidData(initialNav.data);
  const hasCompanyInfoData = hasValidData(initialCompanyInfo.data);

  const hasHeaderData =
    hasNavData && (initialNav.data.main || initialNav.data.sidebar);

  const hasFooterData = hasNavData && initialNav.data.footer;
  const hasMenuData = hasCompanyInfoData && (hasHeaderData || hasFooterData);

  if (!hasMenuData) {
    return (
      <main id="main" tabIndex={-1} className={styles.offsetForStickyHeader}>
        {children}
      </main>
    );
  }

  return (
    <>
      <SkipToMain />
      {hasHeaderData && isDraftMode ? (
        <HeaderPreview
          initialNav={initialNav}
          initialBrandAssets={initialBrandAssets}
        />
      ) : (
        <Header data={initialNav.data} assets={initialBrandAssets.data} />
      )}
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      {hasFooterData && isDraftMode ? (
        <FooterPreview
          initialNav={initialNav}
          initialCompanyInfo={initialCompanyInfo}
          initialBrandAssets={initialBrandAssets}
          initialSoMe={initialSoMe}
        />
      ) : (
        <Footer
          navigationData={initialNav.data}
          legalData={initialLegal.data}
          companyInfo={initialCompanyInfo.data}
          brandAssets={initialBrandAssets.data}
          soMeData={initialSoMe.data}
        />
      )}
    </>
  );
}
