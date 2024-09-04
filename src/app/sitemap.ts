import type { MetadataRoute } from "next";
import { client } from "../../studio/lib/client";
import { Slug } from "../../studio/lib/payloads/global";

interface SitemapDocument {
  slug: Slug;
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const documents = await client.fetch<SitemapDocument[]>(`*[defined(slug)]`);

  return documents.map((s) => ({
    url: new URL(s.slug.current, process.env.NEXT_PUBLIC_URL).toString(),
    lastModified: new Date(s._updatedAt),
  }));
}
