// Client-Safe Variables

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_SHARED_API_VERSION || "v2024-04-29";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_SHARED_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_SHARED_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_SHARED_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_SHARED_PROJECT_ID",
);

export const useCdn = process.env.NODE_ENV === "production";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
