export interface Slug {
  _type: string;
  current: string;
}

export interface DocumentWithSlug {
  slug: Slug;
  _updatedAt: string;
}

export function isInternationalizedString(
  value: unknown,
): value is InternationalizedString {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "_key" in item &&
        typeof item._key === "string" &&
        "value" in item &&
        typeof item.value === "string",
    )
  );
}

export type InternationalizedString = InternationalizedStringRecord[];

export interface InternationalizedStringRecord {
  _key: string;
  value: string;
}
