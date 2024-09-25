import { uuid } from "@sanity/uuid";

export interface Language {
  _key: string;
  title: string;
  id: string;
  icon: string;
  default?: boolean;
}

export const supportedLanguages: Language[] = [
  {
    _key: uuid(),
    title: "English",
    id: "en",
    icon: "🇬🇧",
    default: true,
  },
  {
    _key: uuid(),
    title: "Swedish",
    id: "se",
    icon: "🇸🇪",
    default: false,
  },
  {
    _key: uuid(),
    title: "Norwegian",
    id: "no",
    icon: "🇳🇴",
    default: false,
  },
];

export const defaultLanguage = supportedLanguages.find((lang) => lang.default);
export function getLanguageById(id: string) {
  return supportedLanguages.find((lang) => lang.id === id);
}
