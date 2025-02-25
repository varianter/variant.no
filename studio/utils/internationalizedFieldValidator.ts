import { client } from "studio/lib/client";
import {
  LANGUAGES_QUERY,
  DEFAULT_LANGUAGE_QUERY,
} from "studio/lib/queries/siteSettings";
import type { Rule } from "sanity";
import { allTranslations } from "./i18n";

// Function to get languages, so the validator can be used om both no and se
export async function getStudioLanguages(): Promise<{
  available: string[];
  default: string;
}> {
  const availableLanguages =
    await client.fetch<{ id: string }[]>(LANGUAGES_QUERY);
  const defaultLanguage = await client.fetch<{ id: string } | null>(
    DEFAULT_LANGUAGE_QUERY,
  );

  return {
    available: availableLanguages?.map((lang) => lang.id) ?? ["en"],
    default: defaultLanguage?.id ?? "en",
  };
}

const REQUIRED_LANGUAGES: string[] = [];

async function initializeLanguages() {
  const { available } = await getStudioLanguages();
  REQUIRED_LANGUAGES.push(...available);
}

initializeLanguages();

export const validateInternationalizedField =
  (fieldName: string) => (rule: Rule) =>
    rule
      .required()
      .error(`${fieldName} is required`)
      .custom((value: { _key: string; value?: string }[] | null) => {
        if (!value || !Array.isArray(value)) {
          return `${fieldName} must be an array`;
        }

        const missingLanguages = REQUIRED_LANGUAGES.filter(
          (lang) =>
            !value.some(
              (entry: { _key: string; value?: string }) =>
                entry._key === lang && entry.value?.trim(),
            ),
        );

        return missingLanguages.length > 0
          ? `Missing translations for: ${missingLanguages.join(", ")}`
          : true;
      });

export const validateInternationalizedArray =
  (fieldName: string, fieldKey: string) => (rule: Rule) =>
    rule
      .required()
      .error(`At least one ${fieldName} is required`)
      .custom(
        (items?: { [key: string]: { _key: string; value?: string }[] }[]) => {
          if (!Array.isArray(items) || items.length === 0) {
            return `At least one ${fieldName} is required`;
          }

          for (const item of items) {
            const translations = item[fieldKey] ?? [];

            if (!Array.isArray(translations) || translations.length === 0) {
              return `Each ${fieldName} must have a valid internationalized value`;
            }

            const missingLanguages = REQUIRED_LANGUAGES.filter(
              (lang) =>
                !translations.some(
                  (entry) => entry._key === lang && entry.value?.trim(),
                ),
            );

            if (missingLanguages.length > 0) {
              return `${fieldName} "${translations
                .map((entry) => `${entry._key}: ${entry.value ?? "[missing]"}`)
                .join(
                  ", ",
                )}" is missing translations for: ${missingLanguages.join(", ")}`;
            }
          }

          return true;
        },
      );
