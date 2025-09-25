import { createHash } from "crypto";

import { unstable_cache } from "next/cache";
import { ResponseQueryOptions } from "next-sanity";
import { QueryParams } from "sanity";

import { loadStudioQuery } from "studio/lib/store";

function hashQuery(query: string): string {
  return createHash("sha256").update(query).digest("hex");
}

type Options = Pick<
  ResponseQueryOptions,
  "perspective" | "cache" | "next" | "useCdn" | "stega" | "tag" | "headers"
>;

export async function loadStudioQueryWithCache<
  T extends { _id: string } | null,
>(query: string, params: QueryParams = {}, options?: Options) {
  const cacheKey = [
    "query",
    hashQuery(query),
    JSON.stringify(params),
    { options },
  ].filter((v): v is string => typeof v === "string");

  // Get the data to extract the ID for tagging
  const initialData = await loadStudioQuery<T>(query, params, options);
  const id =
    initialData.data &&
    typeof initialData.data === "object" &&
    "_id" in initialData.data
      ? initialData.data._id
      : null;
  const idTag = id ? [id] : [];
  const tags = idTag;

  const cachedFn = unstable_cache(
    () => loadStudioQuery<T>(query, params, options),
    cacheKey,
    { tags },
  );

  return cachedFn();
}
