import { Metadata } from "next";

import { urlFor } from "studio/lib/image";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { CompanyInfo } from "studio/lib/interfaces/companyDetails";
import { DefaultSeo } from "studio/lib/interfaces/seo";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/admin";
import {
  BRAND_ASSETS_QUERY,
  DEFAULT_SEO_QUERY,
} from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

export type SeoData = {
  title?: string;
  description?: string;
  imageUrl?: string;
  keywords?: string;
};

export const OPEN_GRAPH_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 630,
};

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
    defaultSeo?.seo?.title ||
    companyInfo?.companyName ||
    "Variant";
  const description = seo?.description || defaultSeo?.seo?.description;
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
  const sanityImageUrl = seo?.imageUrl || defaultSeo?.seo?.imageUrl;
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
