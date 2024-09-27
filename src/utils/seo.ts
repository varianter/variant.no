import { toPlainText } from "@portabletext/toolkit";
import type { QueryParams } from "@sanity/client";
import { Metadata } from "next";
import { PortableTextBlock } from "sanity";

import { urlFor } from "studio/lib/image";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { CompanyInfo } from "studio/lib/interfaces/companyDetails";
import { DefaultSeo } from "studio/lib/interfaces/defaultSeo";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/admin";
import {
  BRAND_ASSETS_QUERY,
  DEFAULT_SEO_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

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

export const OPEN_GRAPH_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 630,
};

export async function fetchSeoData(
  query: string,
  variables?: QueryParams | undefined,
): Promise<SeoData | null> {
  try {
    const { data } = await loadStudioQuery<SeoData>(query, variables);
    return data;
  } catch (error) {
    console.error("Error loading SEO data:", error);
    return null;
  }
}

export async function fetchPostSeoData(
  query: string,
  variables?: QueryParams | undefined,
): Promise<SeoData | null> {
  try {
    const { data } = await loadStudioQuery<PostSeoData>(query, variables);
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

export async function generateMetadataFromSeo(
  seo: SeoData | null,
): Promise<Metadata> {
  const { data: defaultSeo } = await loadStudioQuery<DefaultSeo | null>(
    DEFAULT_SEO_QUERY,
  );
  const { data: companyInfo } = await loadStudioQuery<CompanyInfo | null>(
    COMPANY_INFO_QUERY,
  );
  const { data: brandAssets } = await loadStudioQuery<BrandAssets | null>(
    BRAND_ASSETS_QUERY,
  );

  const title =
    seo?.title ||
    defaultSeo?.seo?.seoTitle ||
    companyInfo?.companyName ||
    "Variant";
  const description = seo?.description || defaultSeo?.seo?.seoDescription;
  const keywords = seo?.keywords || "";

  const favicon = brandAssets?.favicon;
  const faviconUrl = favicon ? urlFor(favicon).url() : "";

  const icons = [faviconUrl ? { rel: "icon", url: faviconUrl } : null].filter(
    (icon): icon is NonNullable<typeof icon> => icon !== null,
  );

  const fallbackImageUrl = `/api/openGraphImage?${new URLSearchParams({
    title: title,
    ...(description ? { description: description } : {}),
  })}`;
  const sanityImageUrl = seo?.imageUrl || defaultSeo?.seo?.seoImageUrl;
  const sanityImageParams = `?${new URLSearchParams({
    w: OPEN_GRAPH_IMAGE_DIMENSIONS.width.toString(),
    h: OPEN_GRAPH_IMAGE_DIMENSIONS.height.toString(),
    fit: "fill",
    fm: "png", // required for transparent
    bg: "00000000", // transparent
  })}`;
  const imageUrl = sanityImageUrl
    ? `${sanityImageUrl}${sanityImageParams}`
    : fallbackImageUrl;

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
