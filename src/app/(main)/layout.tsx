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

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { perspective, isDraftMode } = getDraftModeInfo();
  const [initialNav, siteSettings, initialSoMe, initialLegal] =
    await Promise.all([
      loadQuery<Navigation>(NAV_QUERY, {}, { perspective }),
      loadQuery<SiteSettings>(SITESETTINGS_QUERY, {}, { perspective }),
      loadQuery<SocialMediaProfiles>(SOMEPROFILES_QUERY, {}, { perspective }),
      loadQuery<LegalDocument[]>(LEGAL_DOCUMENTS_QUERY, {}, { perspective }),
    ]);

  const hasNavigationData = Boolean(
    siteSettings.data &&
      initialNav.data &&
      (initialNav.data.main ||
        initialNav.data.sidebar ||
        initialNav.data.footer ||
        siteSettings.data?.brandAssets)
  );

  if (!hasNavigationData) {
    return (
      <main id="main" tabIndex={-1}>
        {children}
      </main>
    );
  }
  return (
    <>
      <SkipToMain />
      {isDraftMode ? (
        <HeaderPreview
          initialNav={initialNav}
          initialSiteSetting={siteSettings}
        />
      ) : (
        <Header data={initialNav.data} assets={siteSettings.data.brandAssets} />
      )}
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      {isDraftMode ? (
        <FooterPreview
          initialNav={initialNav}
          initialSiteSetting={siteSettings}
          initialSoMe={initialSoMe}
        />
      ) : (
        <Footer
          navigationData={initialNav.data}
          legalData={initialLegal.data}
          assetsData={siteSettings.data.brandAssets}
          soMeData={initialSoMe.data}
        />
      )}
    </>
  );
}
