import { Darker_Grotesque, Figtree } from "next/font/google";
import { draftMode } from "next/headers";
import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";
import { SiteSettings } from "studio/lib/payloads/siteSettings";
import { SITESETTINGS_QUERY } from "studio/lib/queries/siteSettings";
import { Metadata } from "next";
import { urlFor } from "studio/lib/image";
import { loadQuery } from "studio/lib/store";
import "src/styles/global.css";   
import { generateMetadataFromSeo } from "src/utils/seo";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darkerGrotesque",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-figtree",
});

export async function generateMetadata(): Promise<Metadata> {
  // Root metadata might only rely on site settings
  return generateMetadataFromSeo(null);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteSettings;

  try {
    const { data } = await loadQuery<SiteSettings>(SITESETTINGS_QUERY);
    siteSettings = data;
  } catch (error) {
    console.error("Error loading site settings:", error);
    siteSettings = null;
  }

  if (!siteSettings) {
    console.error("Site settings are undefined");
    siteSettings = { siteMetadata: { defaultLanguage: "en" } }; // Provide default fallback
  }

  const siteLang = siteSettings?.siteMetadata?.defaultLanguage || "en";

  return (
    <html lang={siteLang}>
      <body className={`${figtree.variable} ${darkerGrotesque.variable}`}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
