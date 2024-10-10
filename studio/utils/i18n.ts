import { InternationalizedString } from "studio/lib/interfaces/global";

export function firstTranslation(
  translatedString: InternationalizedString,
): string | null {
  if (translatedString.length === 0) {
    return null;
  }
  return translatedString[0].value;
}
