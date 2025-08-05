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
    "query",
    hashQuery(query),
    JSON.stringify(params),
    perspective,
  ].filter((v): v is string => typeof v === "string");

  return unstable_cache(
    async () => {
      "use cache";
      const value = await loadStudioQuery<T>(query, params, { perspective });

      return value;
    },
    cacheKey,
    {
      tags: ["queries"],
    },
  );
}
