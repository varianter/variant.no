import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "src/components/navigation/footer/Footer";
import SkipToMain from "src/components/skipToMain/SkipToMain";
import { Locale, routing } from "src/i18n/routing";
import "src/styles/global.css";
import { getDraftModeInfo } from "src/utils/draftmode";
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
  NAV_QUERY,
  SOME_PROFILES_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

const fontBrittiSans = localFont({
  src: "../../../../public/_assets/britti-sans-variable.woff2",
  variable: "--font-britti-sans",
});

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

  const { perspective } = getDraftModeInfo();

  const [
    initialNav,
    initialCompanyInfo,
    initialSoMe,
    initialLegal,
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
    loadStudioQuery<CompanyLocation[]>(
      COMPANY_LOCATIONS_QUERY,
      {},
      { perspective },
    ),
  ]);

  return (
    <html lang={params.locale}>
      <body className={fontBrittiSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <SkipToMain />
          {children}
          <Footer
            navigationData={initialNav.data}
            legalData={initialLegal.data}
            companyInfo={initialCompanyInfo.data}
            companyLocations={initialCompanyLocations.data}
            /* brandAssets={initialBrandAssets.data} */
            soMeData={initialSoMe.data}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
