import {
  PortableTextBlock,
  PortableTextObject,
  isPortableTextTextBlock,
} from "sanity";

import { isSanityKeyTypeObject } from "./global";

export function isRichText(value: unknown): value is PortableTextBlock[] {
  return (
    Array.isArray(value) && value.every((item) => isPortableTextBlock(item))
  );
}

export function isPortableTextBlock(
  value: unknown,
): value is PortableTextBlock {
  return isPortableTextTextBlock(value) || isPortableTextObject(value);
}

export function isPortableTextObject(
  value: unknown,
): value is PortableTextObject {
  return isSanityKeyTypeObject(value);
}
