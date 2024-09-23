import type { SanityDocument } from "@sanity/types";

export const DRAFTS_PREFIX = "drafts.";

export function isPublished(document: SanityDocument) {
  return !isDraft(document);
}

export function isDraft(document: SanityDocument) {
  return isDraftId(document._id) || document._rev === undefined;
}

export function buildDraftId(documentId: string): string {
  return isDraftId(documentId) ? documentId : `${DRAFTS_PREFIX}${documentId}`;
}

export function buildPublishedId(documentId: string): string {
  return isPublishedId(documentId)
    ? documentId
    : documentId.slice(DRAFTS_PREFIX.length);
}

function isPublishedId(documentId: string) {
  return !isDraftId(documentId);
}

function isDraftId(documentId: string) {
  return documentId.startsWith(DRAFTS_PREFIX);
}
