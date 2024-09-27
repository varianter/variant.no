import { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { draftMode } from "next/headers";

import { generateMetadataFromSeo } from "src/utils/seo";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";
import { DEFAULT_LANGUAGE_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import "src/styles/global.css";

const fontRecoleta = localFont({
  src: "../../public/_assets/recoleta.otf",
  variable: "--font-recoleta",
});

const fontFigtree = Figtree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-figtree",
});

export async function generateMetadata(): Promise<Metadata> {
  // TODO: Root metadata should only rely on seo from site settings
  return generateMetadataFromSeo(null);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteLang;

  try {
    const { data } = await loadStudioQuery<LanguageObject>(
      DEFAULT_LANGUAGE_QUERY,
    );
    siteLang = data.id;
  } catch (error) {
    console.error("Error loading site settings:", error);
    siteLang = "en";
  }
  return (
    <html lang={siteLang}>
      <body className={`${fontFigtree.variable} ${fontRecoleta.variable}`}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
