import { ClientPerspective } from "next-sanity";
import { draftMode } from "next/headers";

export interface DraftModeInfo {
  isDraftMode: boolean;
  perspective: ClientPerspective | undefined;
}

export function getDraftModeInfo(): DraftModeInfo {
  const isDraftMode = draftMode().isEnabled;
  const perspective = isDraftMode ? "previewDrafts" : "published";
  return { isDraftMode, perspective };
}
