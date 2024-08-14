import { Metadata } from "next";
import { toPlainText } from "@portabletext/toolkit";
import { urlFor } from "studio/lib/image";
import { SITESETTINGS_QUERY } from "studio/lib/queries/siteSettings";
import { loadQuery } from "studio/lib/store";
import { PortableTextBlock } from "src/components/richText/RichText";

type SeoData = {
  title: string;
  description: string;
  imageUrl: string;
  keywords: string;
};

type PostSeoData = {
  title: string;
  description: PortableTextBlock[];
  imageUrl: string;
  keywords: string;
};

type SiteSettings = {
  siteMetadata: {
    siteName: string;
  };
  brandAssets: {
    favicon: string;
  };
};

export async function fetchSeoData(
  query: string,
  variables?: any
): Promise<SeoData | null> {
  try {
    const { data } = await loadQuery<SeoData>(query, variables);
    return data;
  } catch (error) {
    console.error("Error loading SEO data:", error);
    return null;
  }
}

export async function fetchPostSeoData(
  query: string,
  variables?: any
): Promise<SeoData | null> {
  try {
    const { data } = await loadQuery<PostSeoData>(query, variables);
    if (data && data.description) {
      const plainTextDescription = toPlainText(data.description);

      return {
        title: data.title,
        description: plainTextDescription,
        imageUrl: data.imageUrl,
        keywords: data.keywords,
      };
    }

    return null;
  } catch (error) {
    console.error("Error loading SEO data:", error);
    return null;
  }
}

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  try {
    const { data } = await loadQuery<SiteSettings>(SITESETTINGS_QUERY);
    return data;
  } catch (error) {
    console.error("Error loading site settings:", error);
    return null;
  }
}

export async function generateMetadataFromSeo(
  seo: SeoData | null
): Promise<Metadata> {
  const siteSettings = await fetchSiteSettings();

  const title =
    seo?.title || siteSettings?.siteMetadata?.siteName || "Fallback Title";
  const description = seo?.description || "";
  const imageUrl = seo?.imageUrl || "";
  const keywords = seo?.keywords || "";

  const favicon = siteSettings?.brandAssets?.favicon;
  const faviconUrl = favicon ? urlFor(favicon).url() : "";

  const icons = [faviconUrl ? { rel: "icon", url: faviconUrl } : null].filter(
    (icon): icon is NonNullable<typeof icon> => icon !== null
  );

  return {
    title: title,
    description: description,
    openGraph: {
      images: [imageUrl],
    },
    icons: { icon: icons },
    keywords: keywords,
  };
}