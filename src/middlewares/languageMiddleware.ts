import Negotiator from "negotiator";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { client } from "studio/lib/client";
import { SlugTranslations } from "studio/lib/interfaces/slugTranslations";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import {
  DEFAULT_LANGUAGE_QUERY,
  LANGUAGES_QUERY,
} from "studio/lib/queries/siteSettings";
import {
  SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
  SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY,
  SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY,
  SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY,
} from "studio/lib/queries/slugTranslations";

async function translateSlug(
  slug: string,
  targetLanguageId: string,
  sourceLanguageId?: string,
): Promise<string | undefined> {
  if (slug.length === 0) {
    return slug;
  }
  const queryParams = {
    slug,
    language: sourceLanguageId ?? targetLanguageId,
  };
  // query document-based slug translations
  let slugTranslations = await client.fetch<SlugTranslations | null>(
    sourceLanguageId !== undefined
      ? SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY
      : SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY,
    queryParams,
  );
  if (slugTranslations === null) {
    // try field-based slug translations instead
    slugTranslations = await client.fetch<SlugTranslations | null>(
      sourceLanguageId !== undefined
        ? SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY
        : SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY,
      queryParams,
    );
  }
  return slugTranslations?._translations.find(
    (translation) =>
      translation !== null && translation.language === targetLanguageId,
  )?.slug;
}

function negotiateClientLanguage(
  availableLanguages: string[],
): string | undefined {
  const acceptLanguage = headers().get("Accept-Language");
  if (acceptLanguage === null) return undefined;
  return new Negotiator({
    // Negotiator expects lower-case header name
    headers: { "accept-language": acceptLanguage },
  }).language(availableLanguages);
}

/**
 * Handles rerouting of paths based on the language code in the URL or the user's preferred language settings,
 * with special emphasis on cases where words are spelled the same in both Norwegian and English but have different meanings.
 *
 * Key behaviors:
 * - Reroutes users to the appropriate page based on their language preferences, especially for words that
 *   are identical in spelling across languages but have different meanings (false friends).
 * - If a page does not exist in the user's preferred language, the system will show the default language version instead of a 404 error.
 *
 * Limitations/Notes:
 * - No special handling for nested paths (e.g., `/blogg` and `/blogg/post` are treated as distinct slugs `blogg` and `blogg/post`).
 * - **False friend handling:**
 *   - For words spelled the same in different languages, but with different meanings (e.g., "gift" in Norwegian and English),
 *     the system prioritizes the user's preferred language and reroutes to the correct content based on translations.
 *   - Example scenario:
 *     - Given the following pages:
 *        - (1) `/gift` (Norwegian page for "poison")
 *        - (2) `/en/poison` (English page for "poison")
 *        - (3) `/en/gift` (English page for "present")
 *     - If a user with English preferences visits (1) `/gift`, they will be rerouted to (2) `/en/poison` because
 *       the system prioritizes translated content over slug matching, despite identical slugs in (1) and (3).
 *     - If the same user visits (3) `/en/gift`, they will be directed to the English page for "present".
 *
 * - **Default language fallback:**
 *   - If a user visits a page like `/eple` and no translation exists in their preferred language (e.g., `/en/apple`),
 *     they will see the default language version (`/eple`) instead of receiving a 404 error.
 *
 * @param {Object} request - The incoming request object containing URL and user preferences.
 */
export async function languageMiddleware(
  request: NextRequest,
): Promise<NextResponse | undefined> {
  const availableLanguages = await client.fetch<LanguageObject[] | null>(
    LANGUAGES_QUERY,
  );
  if (availableLanguages === null) {
    console.error("No languages available, language middleware aborted.");
    return;
  }
  const pathname = request.nextUrl.pathname;
  const language = availableLanguages.find(
    ({ id }) => pathname.startsWith(`/${id}/`) || pathname === `/${id}`,
  );
  if (language === undefined) {
    return redirectMissingLanguage(pathname, availableLanguages, request.url);
  }
  return redirectWithLanguage(pathname, language, request.url);
}

/**
 * Language is provided, check that the slug actually exists for the given language.
 * - If it exists, no changes are made.
 * - Otherwise, we attempt to translate to the specified language
 *   - If translated, user is redirected to `/[language]/[translatedSlug]`
 *   - Otherwise, user is redirected to the slug with default language (`/[slug]`)
 *
 * @param pathname
 * @param language
 * @param baseUrl
 */
async function redirectWithLanguage(
  pathname: string,
  language: LanguageObject,
  baseUrl: string,
) {
  const slug = pathname.split("/").slice(2).join("/");
  const translatedSlug = await translateSlug(slug, language.id);
  if (translatedSlug === undefined) {
    return NextResponse.redirect(new URL(`/${slug}`, baseUrl));
  }
  if (translatedSlug !== slug) {
    const translatedPathname = `/${language.id}/${translatedSlug}`;
    return NextResponse.redirect(new URL(translatedPathname, baseUrl));
  }
  // all good, no modifications needed
  return;
}

/**
 * Determines the user's most preferred language from the available languages and handles URL redirection accordingly.
 *
 * Key behaviors:
 * - If the user's preferred (negotiated) language matches the default language, no redirection occurs.
 * - If the user's preferred language is different from the default:
 *   - Attempt to find a translation for the current page.
 *     - If a translated version exists, redirect the user to the corresponding path: `/[negotiatedLanguage]/[translatedSlug]`.
 *     - If no translation is found, keep the user on the default language page at `/[slug]`.
 *
 * @param {string} pathname - The current URL path.
 * @param {string[]} availableLanguages - A list of languages supported by the site.
 * @param {string} baseUrl - The base URL of the site.
 */
async function redirectMissingLanguage(
  pathname: string,
  availableLanguages: LanguageObject[],
  baseUrl: string,
) {
  // Pathname does NOT include a language code, we negotiate with the user to find
  // the most preferred languages from the list of available languages
  const defaultLanguageId = (
    await client.fetch<LanguageObject | null>(DEFAULT_LANGUAGE_QUERY)
  )?.id;
  if (defaultLanguageId === undefined) {
    console.error(
      "No default language available, language middleware aborted.",
    );
    return;
  }
  const preferredLanguage =
    negotiateClientLanguage(
      availableLanguages.map((language) => language.id),
    ) ?? defaultLanguageId;
  if (preferredLanguage === defaultLanguageId) {
    // Same as default, simply rewrite internally to include language code
    return NextResponse.rewrite(
      new URL(`/${preferredLanguage}${pathname}`, baseUrl),
    );
  }
  // Attempt to translate to the preferred language
  const slug = pathname.replace(/^\//, "");
  const translatedSlug = await translateSlug(
    slug,
    preferredLanguage,
    defaultLanguageId,
  );
  if (translatedSlug === undefined) {
    // Translation not available, rewrite to default language
    return NextResponse.rewrite(
      new URL(`/${defaultLanguageId}${pathname}`, baseUrl),
    );
  }
  // Redirect with language code and translated slug
  return NextResponse.redirect(
    new URL(`/${preferredLanguage}/${translatedSlug}`, baseUrl),
  );
}
