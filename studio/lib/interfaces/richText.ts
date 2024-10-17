import {
  PortableTextBlock,
  PortableTextObject,
  isPortableTextTextBlock,
} from "sanity";

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

function isSanityKeyTypeObject(value: unknown): value is {
  _key: string;
  _type: string;
} {
  return (
    typeof value === "object" &&
    value !== null &&
    "_key" in value &&
    typeof value._key === "string" &&
    "_type" in value &&
    typeof value._type === "string"
  );
}
