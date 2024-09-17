import { Metadata } from "next";
import { Darker_Grotesque, Figtree } from "next/font/google";
import { draftMode } from "next/headers";

import { generateMetadataFromSeo } from "src/utils/seo";
import { DefaultLanguageObject } from "studio/lib/interfaces/languages";
import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";
import { DEFAULT_LANGUAGE_QUERY } from "studio/lib/queries/languages";
import { loadQuery } from "studio/lib/store";

import "src/styles/global.css";

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
    const { data } = await loadQuery<DefaultLanguageObject>(
      DEFAULT_LANGUAGE_QUERY,
    );
    siteLang = data.defaultLanguage;
  } catch (error) {
    console.error("Error loading site settings:", error);
    siteLang = "en";
  }

  return (
    <html lang={siteLang}>
      <body className={`${figtree.variable} ${darkerGrotesque.variable}`}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
