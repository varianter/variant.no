import { CustomerCase } from "studioShared/lib/interfaces/customerCases";

type LocalizedValue =
  | string
  | { _key: string; value?: string | null }[]
  | null
  | undefined;

// Fields can arrive either pre-resolved for a locale (string) or as a raw internationalized array.
function hasLocalizedValue(field: LocalizedValue, locale: string): boolean {
  if (field == null) return false;
  if (typeof field === "string") return field.trim().length > 0;
  const entry = field.find((item) => item._key === locale);
  return !!entry?.value?.trim();
}

export function getMissingCustomerCaseFields(
  customerCase: Partial<CustomerCase> | null | undefined,
  locale: string,
): string[] {
  if (!customerCase) return ["customer case document"];

  const missingFields: string[] = [];

  if (!hasLocalizedValue(customerCase.slug, locale))
    missingFields.push("URL slug");
  if (!hasLocalizedValue(customerCase.basicTitle, locale))
    missingFields.push("title");
  if (!hasLocalizedValue(customerCase.description, locale))
    missingFields.push("description");
  if (!customerCase.image) missingFields.push("header image");
  if (!customerCase.projectInfo) {
    missingFields.push("project information");
  }

  return missingFields;
}
