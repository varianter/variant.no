// Sanity Client Configuration

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "studioShared/env";

export const sharedClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective:
    process.env.NODE_ENV === "development" ? "previewDrafts" : "published",
  stega: {
    enabled: false,
    studioUrl: "/shared",
  },
});
