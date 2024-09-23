import type { MetadataRoute } from "next";

import { client } from "studio/lib/client";
import { DocumentWithSlug } from "studio/lib/interfaces/global";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { DOCUMENTS_WITH_SLUG_QUERY } from "studio/lib/queries/document";
import { LANDING_PAGE_QUERY } from "studio/lib/queries/navigation";
import { token } from "studio/lib/token";

import { readBaseUrl } from "./env";

const clientWithToken = client.withConfig({ token });

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrlResult = readBaseUrl();
  if (!baseUrlResult.ok) {
    console.error("Failed to generate sitemap:", baseUrlResult.error);
    return [];
  }
  const baseUrl = baseUrlResult.value;
  const slugDocuments = await clientWithToken.fetch<DocumentWithSlug[]>(
    DOCUMENTS_WITH_SLUG_QUERY,
  );
  const sitemapEntries = slugDocuments.map((slugDocument) => ({
    url: new URL(slugDocument.slug.current, baseUrl).toString(),
    lastModified: new Date(slugDocument._updatedAt),
  }));
  const landingPage = await clientWithToken.fetch<PageBuilder | null>(
    LANDING_PAGE_QUERY,
  );
  if (landingPage !== null) {
    sitemapEntries.push({
      url: baseUrl.toString(),
      lastModified: new Date(landingPage._updatedAt),
    });
  }
  return sitemapEntries;
}
