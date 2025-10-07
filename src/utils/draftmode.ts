import { draftMode } from "next/headers";
import { ClientPerspective } from "next-sanity";

export interface DraftModeInfo {
  isDraftMode: boolean;
  perspective: ClientPerspective | undefined;
}

export async function getDraftModeInfo(): Promise<DraftModeInfo> {
  const draftModeResult = await draftMode();
  const isDraftMode = draftModeResult.isEnabled;
  const perspective = isDraftMode ? "previewDrafts" : "published";
  return { isDraftMode, perspective };
}
