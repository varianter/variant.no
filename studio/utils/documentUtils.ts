import type { SanityDocument } from "@sanity/types";

export function isPublished(document: SanityDocument) {
  return !isDraft(document);
}

export function isDraft(document: SanityDocument) {
  return document._id.startsWith("drafts.") || document._rev === undefined;
}
