import { createHash } from "crypto";

import { unstable_cache } from "next/cache";
import { ClientPerspective } from "next-sanity";
import { QueryParams } from "sanity";

import { loadStudioQuery } from "studio/lib/store";

function hashQuery(query: string): string {
  return createHash("sha256").update(query).digest("hex");
}

export function createSanityFetcher<T>(
  query: string,
  params: QueryParams = {},
  perspective?: ClientPerspective,
) {
  const cacheKey = [
    `query:${hashQuery(query)}`,
    params && `lang:${params.language}`,
    perspective && `perspective:${perspective}`,
  ].filter(Boolean) as string[];

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
