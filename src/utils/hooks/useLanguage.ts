import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { fetchWithToken } from "studio/lib/fetchWithToken";
import { SlugTranslations } from "studio/lib/interfaces/slugTranslations";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import { LANGUAGES_QUERY } from "studio/lib/queries/languages";
import { SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY } from "studio/lib/queries/slugTranslations";

/**
 * Client hook providing access to the available Sanity translations for the given slug
 *
 * @param currentLanguage the language of the given slug
 * @param slug slug to translate
 * @param availableLanguages languages with possible slug translation
 */
function useSlugTranslations(
  currentLanguage: LanguageObject | undefined,
  slug: string,
  availableLanguages: LanguageObject[] | null,
) {
  const [slugTranslationsData, setSlugTranslationsData] =
    useState<SlugTranslations | null>(null);

  useEffect(() => {
    if (currentLanguage === undefined) {
      return;
    }
    fetchWithToken<SlugTranslations | null>(
      SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug,
        language: currentLanguage?.id,
      },
    ).then(setSlugTranslationsData);
  }, [currentLanguage, slug]);

  const allSlugTranslations =
    slug === ""
      ? availableLanguages?.map((lang) => ({
          slug: "",
          language: lang.id,
        }))
      : slugTranslationsData?._translations;

  const otherSlugTranslations = allSlugTranslations?.filter(
    (translation) =>
      translation && translation.language !== currentLanguage?.id,
  );

  // include full language object, not just id, in slug translation
  return otherSlugTranslations?.map(
    (translation) =>
      translation && {
        slug: `/${translation.language}/${translation.slug}`,
        language: availableLanguages?.find(
          (lang) => lang.id === translation.language,
        ),
      },
  );
}

/**
 * Client hook providing access to:
 * - the currently selected language from URL
 * - all enabled languages in Sanity
 * - default language selected in Sanity
 * - available translations of the current page slug
 */
export default function useLanguage() {
  const pathname = usePathname();

  const [availableLanguages, setAvailableLanguages] = useState<
    LanguageObject[] | null
  >(null);

  const defaultLanguage = availableLanguages?.find(
    (language) => language.default,
  );

  const language = availableLanguages?.find(
    ({ id }) => pathname.startsWith(`/${id}/`) || pathname === `/${id}`,
  );

  const currentLanguage = language ?? defaultLanguage;

  const slug = pathname
    .split("/")
    .slice(language !== undefined ? 2 : 1)
    .join("/");

  const slugTranslations = useSlugTranslations(
    currentLanguage,
    slug,
    availableLanguages,
  );

  useEffect(() => {
    fetchWithToken<LanguageObject[] | null>(LANGUAGES_QUERY).then((data) =>
      setAvailableLanguages(data),
    );
  }, []);

  return {
    language,
    defaultLanguage,
    availableLanguages,
    slugTranslations,
  };
}
