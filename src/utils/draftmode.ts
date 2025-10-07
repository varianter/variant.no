import { type UnsafeUnwrappedDraftMode, draftMode } from "next/headers";
import { ClientPerspective } from "next-sanity";

export interface DraftModeInfo {
  isDraftMode: boolean;
  perspective: ClientPerspective | undefined;
}

export function getDraftModeInfo(): DraftModeInfo {
  const isDraftMode = (draftMode() as unknown as UnsafeUnwrappedDraftMode)
    .isEnabled;
  const perspective = isDraftMode ? "previewDrafts" : "published";
  return { isDraftMode, perspective };
}
