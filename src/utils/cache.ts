import { createHash } from "crypto";

import { unstable_cache } from "next/cache";
import { ClientPerspective } from "next-sanity";

import { loadStudioQuery } from "studio/lib/store";

function hashQuery(query: string): string {
  return createHash("sha256").update(query).digest("hex");
}

export function createSanityFetcher<T>(
  query: string,
  language?: string,
  perspective?: ClientPerspective,
) {
  const cacheKey = [
    `query:${hashQuery(query)}`,
    language && `lang:${language}`,
    perspective && `perspective:${perspective}`,
  ].filter(Boolean) as string[];

  const params = language ? { language } : {};

  return unstable_cache(
    async () => {
      "use cache";
      const value = await loadStudioQuery<T>(query, params, { perspective });
      return value;
    },
    cacheKey,
    {
      tags: cacheKey,
    },
  );
}
