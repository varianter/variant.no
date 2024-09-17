import { draftMode } from "next/headers";
import { ClientPerspective } from "next-sanity";

export interface DraftModeInfo {
  isDraftMode: boolean;
  perspective: ClientPerspective | undefined;
}

export function getDraftModeInfo(): DraftModeInfo {
  const isDraftMode = draftMode().isEnabled;
  const perspective = isDraftMode ? "previewDrafts" : "published";
  return { isDraftMode, perspective };
}
