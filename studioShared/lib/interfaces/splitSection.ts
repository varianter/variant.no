import { isSanityKeyTypeObject } from "studio/lib/interfaces/global";
import { splitSectionSections } from "studioShared/schemas/objects/splitSection";

import { ImageBlock } from "./imageBlock";
import { TextBlock } from "./textBlock";

export interface EmptySection {
  _key: string;
  _type: "emptySection";
}

export type SplitSectionSection = TextBlock | ImageBlock | EmptySection;

export interface SplitSection {
  _key: string;
  _type: "splitSection";
  sections: SplitSectionSection[];
}

export function isSplitSectionSections(
  value: unknown,
): value is SplitSectionSection[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        isSanityKeyTypeObject(item) &&
        splitSectionSections.some((s) => s.name === item._type),
    )
  );
}
