import { InternationalizedValue } from "studio/lib/interfaces/global";

export function firstTranslation<T>(
  internationalizedValue: InternationalizedValue<T>,
): T | null {
  if (internationalizedValue.length === 0) {
    return null;
  }
  return internationalizedValue[0].value;
}
