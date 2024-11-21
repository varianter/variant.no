import { InternationalizedValue } from "studio/lib/interfaces/global";

export function firstTranslation<T>(
  internationalizedValue: InternationalizedValue<T>,
): T | null {
  if (internationalizedValue.length === 0) {
    return null;
  }
  return internationalizedValue[0].value;
}

export function allTranslation<T>(
  internationalizedValue: InternationalizedValue<T>,
): string | null {
  if (internationalizedValue.length === 0) {
    return null;
  }
  return internationalizedValue
    .map((item) => item._key.toUpperCase() + ": " + item.value)
    .join(", ");
}
