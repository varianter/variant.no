// Sanity Client Configuration

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective:
    process.env.NODE_ENV === "development" ? "previewDrafts" : "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
