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

export function checkDraftDataIfDevelopment(data: unknown) {
  if (process.env.NODE_ENV === "development") {
    if (typeof data !== "object" || data === null) {
      console.error(
        `Draft data has an unexpected type: ${typeof data}. Expected an object.`,
      );
    }
  }
}
