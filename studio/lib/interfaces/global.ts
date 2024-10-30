import { PortableTextBlock } from "sanity";

import { isRichText } from "./richText";

export interface Slug {
  _type: string;
  current: string;
}

export function isInternationalizedValue(
  value: unknown,
): value is InternationalizedValue<unknown> {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "_key" in item &&
        typeof item._key === "string" &&
        "value" in item,
    )
  );
}

export function isInternationalizedString(
  value: unknown,
): value is InternationalizedString {
  return (
    isInternationalizedValue(value) &&
    value.every((item) => typeof item.value === "string")
  );
}

export function isInternationalizedRichText(
  value: unknown,
): value is InternationalizedValue<PortableTextBlock[]> {
  return (
    isInternationalizedValue(value) &&
    value.every((record) => isRichText(record.value))
  );
}

export type InternationalizedValue<T> = InternationalizedValueRecord<T>[];

export interface InternationalizedValueRecord<T> {
  _key: string;
  value: T;
}

export type InternationalizedString = InternationalizedValueRecord<string>[];

export function isSanityKeyTypeObject(value: unknown): value is {
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
