import localFont from "next/font/local";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "src/components/navigation/footer/Footer";
import FooterPreview from "src/components/navigation/footer/FooterPreview";
import SkipToMain from "src/components/skipToMain/SkipToMain";
import { Locale, routing } from "src/i18n/routing";
import { getDraftModeInfo } from "src/utils/draftmode";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import {
  CompanyInfo,
  CompanyLocation,
} from "studio/lib/interfaces/companyDetails";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { Navigation } from "studio/lib/interfaces/navigation";
import { SocialMediaProfiles } from "studio/lib/interfaces/socialMedia";
import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";
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
import { loadStudioQuery } from "studio/lib/store";
import "src/styles/global.css";

const fontBrittiSans = localFont({
  src: "../../../../public/_assets/britti-sans-variable.woff2",
  variable: "--font-britti-sans",
});

const hasValidData = (data: unknown) => data && Object.keys(data).length > 0;

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  if (!routing.locales.includes(params.locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const { perspective, isDraftMode } = getDraftModeInfo();

  const [
    initialNav,
    initialCompanyInfo,
    initialSoMe,
    initialLegal,
    initialBrandAssets,
    initialCompanyLocations,
  ] = await Promise.all([
    loadStudioQuery<Navigation>(
      NAV_QUERY,
      { language: params.locale },
      { perspective },
    ),
    loadStudioQuery<CompanyInfo>(COMPANY_INFO_QUERY, {}, { perspective }),
    loadStudioQuery<SocialMediaProfiles | null>(
      SOME_PROFILES_QUERY,
      {},
      { perspective },
    ),
    loadStudioQuery<LegalDocument[]>(
      LEGAL_DOCUMENTS_BY_LANG_QUERY,
      { language: params.locale },
      { perspective },
    ),
    loadStudioQuery<BrandAssets>(BRAND_ASSETS_QUERY, {}, { perspective }),
    loadStudioQuery<CompanyLocation[]>(
      COMPANY_LOCATIONS_QUERY,
      {},
      { perspective },
    ),
  ]);

  const hasNavData = hasValidData(initialNav.data);

  const hasFooterData = hasNavData && initialNav.data.footer;

  return (
    <html lang={params.locale}>
      <body className={fontBrittiSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <SkipToMain />
          {children}
          {hasFooterData && isDraftMode ? (
            <FooterPreview
              initialNav={initialNav}
              initialCompanyInfo={initialCompanyInfo}
              initialBrandAssets={initialBrandAssets}
              initialSoMe={initialSoMe}
              initialLegal={initialLegal}
              language={params.locale}
              initialCompanyLocations={initialCompanyLocations}
            />
          ) : (
            <Footer
              navigationData={initialNav.data}
              legalData={initialLegal.data}
              companyInfo={initialCompanyInfo.data}
              companyLocations={initialCompanyLocations.data}
              /* brandAssets={initialBrandAssets.data} */
              soMeData={initialSoMe.data}
            />
          )}
          {draftMode().isEnabled && <LiveVisualEditing />}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
