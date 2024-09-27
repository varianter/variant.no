import Negotiator from "negotiator";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { client } from "studio/lib/client";
import { SlugTranslations } from "studio/lib/interfaces/slugTranslations";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import {
  DEFAULT_LANGUAGE_QUERY,
  LANGUAGES_QUERY,
} from "studio/lib/queries/languages";
import {
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
  const slugTranslations = await client.fetch<SlugTranslations | null>(
    sourceLanguageId !== undefined
      ? SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY
      : SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY,
    {
      slug,
      language: sourceLanguageId ?? targetLanguageId,
    },
  );
  return slugTranslations?._translations.find(
    (t) => t !== null && t.language === targetLanguageId,
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
 * Handles rerouting of paths based on URL language code or user's preferred language
 *
 * Limitations/notes:
 * - no special treatment of nested paths (e.g. `/blogg` uses slug `blogg`, while `/blogg/hei` uses slug `blogg/hei`)
 * - given the following valid pages, an English user will be redirected from (1) to (2), and not to (3):
 *      - (1) `/gift`
 *      - (2) `/en/poison`
 *      - (3) `/en/gift`
 * - given the following valid pages, an English user navigating to (1) will not be redirected to (2), but receive a 404 error:
 *      - (1) `/gift`
 *      - (2) `/en/gift`
 *
 * @param request
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
 * Check that the slug actually exists for the given language.
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
 *
 * Negotiate with the user to find the most preferred languages from the list of available languages
 *   - If the negotiated language is the same as default, no changes are made.
 *   - Otherwise, we attempt to translate to the negotiated language
 *     - If translated, user is redirected to `/[negotiatedLanguage]/[translatedSlug]`
 *     - Otherwise, user is redirected to the slug with default language (`/[slug]`)
 *
 * @param pathname
 * @param availableLanguages
 * @param baseUrl
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
  const negotiatedLanguage =
    negotiateClientLanguage(
      availableLanguages.map((language) => language.id),
    ) ?? defaultLanguageId;
  if (negotiatedLanguage === defaultLanguageId) {
    // Same as default, simply rewrite internally to include language code
    return NextResponse.rewrite(
      new URL(`/${negotiatedLanguage}${pathname}`, baseUrl),
    );
  }
  // Attempt to translate to the negotiated language
  const slug = pathname.replace(/^\//, "");
  const translatedSlug = await translateSlug(
    slug,
    negotiatedLanguage,
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
    new URL(`/${negotiatedLanguage}/${translatedSlug}`, baseUrl),
  );
}
