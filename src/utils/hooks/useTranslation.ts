import { useEffect, useState } from "react";

type Language = "en" | "no";

interface Translations {
  [key: string]: string | Translations;
}

export function useTranslation(initialLanguage: Language = "no") {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(
          `../translations/${language}.json`
        );
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: Translations | string | undefined = translations;

    for (const k of keys) {
      if (
        current &&
        typeof current === "object" &&
        !(current instanceof String)
      ) {
        current = current[k];
      } else {
        return key;
      }
    }

    return typeof current === "string" ? current : key;
  };

  return { t, language, setLanguage };
}
