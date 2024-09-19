export interface Language {
  _key: string;
  title: string;
  id: string;
  icon: string;
  default?: boolean;
}

export const supportedLanguages: Language[] = [
  {
    _key: `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    title: "English",
    id: "en",
    icon: "🇬🇧",
    default: true,
  },
  {
    _key: `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    title: "Swedish",
    id: "se",
    icon: "🇸🇪",
    default: false,
  },
  {
    _key: `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    title: "Norwegian",
    id: "no",
    icon: "🇳🇴",
    default: false,
  },
];
