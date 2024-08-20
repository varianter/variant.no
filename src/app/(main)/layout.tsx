import Footer from "src/components/navigation/footer/Footer";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { SITESETTINGS_QUERY } from "studio/lib/queries/siteSettings";
import { Header } from "src/components/navigation/header/Header";
import { Navigation } from "studio/lib/payloads/navigation";
import { SiteSettings } from "studio/lib/payloads/siteSettings";
import { loadQuery } from "studio/lib/store";
import HeaderPreview from "src/components/navigation/header/HeaderPreview";
import FooterPreview from "src/components/navigation/footer/FooterPreview";
import { SOMEPROFILES_QUERY } from "studio/lib/queries/socialMediaProfiles";
import { SocialMediaProfiles } from "studio/lib/payloads/socialMedia";
import { getDraftModeInfo } from "src/utils/draftmode";
import SkipToMain from "src/components/skipToMain/SkipToMain";
import { LEGAL_DOCUMENTS_QUERY } from "studio/lib/queries/legalDocuments";
import { LegalDocument } from "studio/lib/payloads/legalDocuments";
import styles from "./layout.module.css";

const hasValidData = (data: any) => data && Object.keys(data).length > 0;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [initialNav, initialSiteSettings, initialSoMe, initialLegal] =
    await Promise.all([
      loadQuery<Navigation>(NAV_QUERY, {}, { perspective }),
      loadQuery<SiteSettings>(SITESETTINGS_QUERY, {}, { perspective }),
      loadQuery<SocialMediaProfiles>(SOMEPROFILES_QUERY, {}, { perspective }),
      loadQuery<LegalDocument[]>(LEGAL_DOCUMENTS_QUERY, {}, { perspective }),
    ]);

  const hasNavData = hasValidData(initialNav.data);
  const hasSiteSettingsData = hasValidData(initialSiteSettings.data);

  const hasHeaderData =
    hasNavData && (initialNav.data.main || initialNav.data.sidebar);

  const hasFooterData = hasNavData && initialNav.data.footer;
  const hasMenuData = hasSiteSettingsData && (hasHeaderData || hasFooterData);

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
          initialSiteSetting={initialSiteSettings}
        />
      ) : (
        <Header
          data={initialNav.data}
          assets={initialSiteSettings.data?.brandAssets}
        />
      )}
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      {hasFooterData && isDraftMode ? (
        <FooterPreview
          initialNav={initialNav}
          initialSiteSetting={initialSiteSettings}
          initialSoMe={initialSoMe}
        />
      ) : (
        <Footer
          navigationData={initialNav.data}
          legalData={initialLegal.data}
          siteSettings={initialSiteSettings.data}
          soMeData={initialSoMe.data}
        />
      )}
    </>
  );
}
