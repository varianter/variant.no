import type { MetadataRoute } from "next";

import { client } from "studio/lib/client";
import { Slug } from "studio/lib/interfaces/global";
import { token } from "studio/lib/token";

interface SitemapDocument {
  slug: Slug;
  _updatedAt: string;
}

const clientWithToken = client.withConfig({ token });

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const documents =
    await clientWithToken.fetch<SitemapDocument[]>(`*[defined(slug)]`);

  return documents.map((s) => ({
    url: new URL(s.slug.current, process.env.NEXT_PUBLIC_URL).toString(),
    lastModified: new Date(s._updatedAt),
  }));
}
