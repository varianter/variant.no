import { Metadata } from "next";
import { toPlainText } from "@portabletext/toolkit";
import { urlFor } from "studio/lib/image";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/companyInfo";
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

type CompanyInfo = {
  siteMetadata: {
    siteName: string;
  };
  brandAssets: {
    favicon: string;
  };
};

export async function fetchSeoData(
  query: string,
  variables?: any,
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
  variables?: any,
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

export async function fetchCompanyInfo(): Promise<CompanyInfo | null> {
  try {
    const { data } = await loadQuery<CompanyInfo>(COMPANY_INFO_QUERY);
    return data;
  } catch (error) {
    console.error("Error loading site settings:", error);
    return null;
  }
}

export async function generateMetadataFromSeo(
  seo: SeoData | null,
): Promise<Metadata> {
  const companyInfo = await fetchCompanyInfo();

  const title = seo?.title || companyInfo?.siteMetadata?.siteName || "Variant";
  const description = seo?.description;
  const keywords = seo?.keywords || "";

  const favicon = companyInfo?.brandAssets?.favicon;
  const faviconUrl = favicon ? urlFor(favicon).url() : "";

  const icons = [faviconUrl ? { rel: "icon", url: faviconUrl } : null].filter(
    (icon): icon is NonNullable<typeof icon> => icon !== null,
  );

  const fallbackImageUrl = `/api/openGraphImage?${new URLSearchParams({
    title: title,
    ...(description ? { description: description } : {}),
  })}`;

  return {
    title: title,
    description: description,
    openGraph: {
      images: [seo?.imageUrl ?? fallbackImageUrl],
    },
    icons: { icon: icons },
    keywords: keywords,
  };
}
