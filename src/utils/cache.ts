import { createHash } from "crypto";

import { unstable_cache } from "next/cache";
import { ClientPerspective } from "next-sanity";
import { QueryParams } from "sanity";

import { loadStudioQuery } from "studio/lib/store";

function hashQuery(query: string): string {
  return createHash("sha256").update(query).digest("hex");
}

export async function loadStudioQueryCached<T extends { _id: string }>(
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

  // Get the data to extract the ID for tagging
  const initialData = await loadStudioQuery<T>(query, params, {
    perspective: perspective,
  });

  const id = initialData.data._id;
  const idTag = id ? [id] : [];
  const tags = idTag;
  const cachedFn = unstable_cache(
    () => loadStudioQuery<T>(query, params, { perspective: perspective }),
    cacheKey,
    { tags },
  );

  return cachedFn();
}
