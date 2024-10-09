import { groq } from "next-sanity";

export function translatedFieldFragment(fieldName: string) {
  return groq`${fieldName}[_key == $language][0].value`;
}
