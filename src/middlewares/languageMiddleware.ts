import Negotiator from "negotiator";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { SanityClient } from "next-sanity";

import { client } from "studio/lib/client";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import {
  DEFAULT_LANGUAGE_QUERY,
  LANGUAGES_QUERY,
} from "studio/lib/queries/siteSettings";
import {
  SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY,
  SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
  SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY,
  SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY,
  SLUG_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY,
  SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY,
  SLUG_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY,
  SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY,
} from "studio/lib/queries/slugTranslations";
import { sharedClient } from "studioShared/lib/client";

export async function translateDocumentSlug(
  queryClient: SanityClient,
  slug: string,
  targetLanguageId: string,
  sourceLanguageId?: string,
  docType?: string,
) {
  return queryClient.fetch<InternationalizedString | null>(
    sourceLanguageId !== undefined
      ? docType !== undefined
        ? SLUG_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY
        : SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY
      : docType !== undefined
        ? SLUG_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY
        : SLUG_TRANSLATIONS_TO_LANGUAGE_QUERY,
    {
      slug,
      language: sourceLanguageId ?? targetLanguageId,
      ...(docType !== undefined
        ? {
            type: docType,
          }
        : {}),
    },
    {
      perspective: "published",
    },
  );
}

export async function translateFieldSlug(
  queryClient: SanityClient,
  slug: string,
  targetLanguageId: string,
  sourceLanguageId?: string,
  docType?: string,
) {
  return queryClient.fetch<InternationalizedString | null>(
    sourceLanguageId !== undefined
      ? docType !== undefined
        ? SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY
        : SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY
      : docType !== undefined
        ? SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_BY_TYPE_QUERY
        : SLUG_FIELD_TRANSLATIONS_TO_LANGUAGE_QUERY,
    {
      slug,
      language: sourceLanguageId ?? targetLanguageId,
      ...(docType !== undefined
        ? {
            type: docType,
          }
        : {}),
    },
    {
      perspective: "published",
    },
  );
}

async function translateSlug(
  slug: string,
  targetLanguageId: string,
  sourceLanguageId?: string,
  docType?: string,
  translationType?: "document" | "field",
  project: "studio" | "shared" = "studio",
): Promise<string | undefined> {
  const queryClient = project === "studio" ? client : sharedClient;
  let slugTranslations = null;
  if (translationType === "document" || translationType === undefined) {
    slugTranslations = await translateDocumentSlug(
      queryClient,
      slug,
      targetLanguageId,
      sourceLanguageId,
      docType,
    );
  }
  if (
    translationType === "field" ||
    (translationType === undefined &&
      (slugTranslations === null || slugTranslations.length === 0))
  ) {
    slugTranslations = await translateFieldSlug(
      queryClient,
      slug,
      targetLanguageId,
      sourceLanguageId,
      docType,
    );
  }
  return slugTranslations?.find(
    (translation) => translation._key === targetLanguageId,
  )?.value;
}

async function translateCustomerCasePath(
  path: string[],
  targetLanguageId: string,
  sourceLanguageId?: string,
): Promise<string[] | undefined> {
  const pageSlugTranslation = await translateSlug(
    path[0],
    targetLanguageId,
    sourceLanguageId,
    "customerCasesPage",
  );
  if (pageSlugTranslation === undefined) {
    return undefined;
  }
  return translateSlug(
    path[1],
    targetLanguageId,
    sourceLanguageId,
    "customerCase",
    "field",
    "shared",
  ).then((slug) =>
    slug !== undefined ? [pageSlugTranslation, slug] : undefined,
  );
}

async function translateEmployeePagePath(
  path: string[],
  targetLanguageId: string,
  sourceLanguageId?: string,
) {
  if (path.length !== 2) {
    return undefined;
  }
  const pageSlugTranslation = await translateSlug(
    path[0],
    targetLanguageId,
    sourceLanguageId,
    "pageBuilder",
  );
  if (pageSlugTranslation === undefined) {
    return undefined;
  }
  return [pageSlugTranslation, path[1]];
}

async function translatePath(
  path: string[],
  targetLanguageId: string,
  sourceLanguageId?: string,
): Promise<string[] | undefined> {
  if (path.length === 0) {
    return path;
  }
  if (path.length === 1) {
    return translateSlug(path[0], targetLanguageId, sourceLanguageId).then(
      (slug) => (slug !== undefined ? [slug] : undefined),
    );
  }
  let pathTranslation = await translateCustomerCasePath(
    path,
    targetLanguageId,
    sourceLanguageId,
  );
  if (pathTranslation !== undefined) {
    return pathTranslation;
  }
  pathTranslation = await translateEmployeePagePath(
    path,
    targetLanguageId,
    sourceLanguageId,
  );
  if (pathTranslation !== undefined) {
    return pathTranslation;
  }
  return undefined;
}

function negotiateClientLanguage(
  availableLanguages: string[],
): string | undefined {
  const acceptLanguage = headers().get("Accept-Language");
  if (acceptLanguage === null) return undefined;
  return new Negotiator({
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
 * @returns {Promise<void>} - No return; modifies `request.nextUrl.pathname` directly.
 */
export async function languageMiddleware(request: NextRequest): Promise<void> {
  const availableLanguages = await client.fetch<LanguageObject[] | null>(
    LANGUAGES_QUERY,
  );
  if (availableLanguages === null) {
    console.error("No languages available, language middleware aborted.");
    return;
  }

  const path = request.nextUrl.pathname.replace(/^\//, "").split("/");
  const language = availableLanguages.find(({ id }) => path[0] === id);
  const defaultLanguageId = (
    await client.fetch<LanguageObject | null>(DEFAULT_LANGUAGE_QUERY)
  )?.id;

  if (defaultLanguageId === undefined) {
    console.error(
      "No default language available, language middleware aborted.",
    );
    return;
  }

  if (language === undefined) {
    await rewriteMissingLanguage(
      request,
      path,
      availableLanguages,
      defaultLanguageId,
    );
  } else {
    await rewriteWithLanguage(request, path, language, defaultLanguageId);
  }
}

/**
 * Rewrites the request path to the language-specific version if it exists.
 *
 * @param {NextRequest} request - The incoming request.
 * @param {string[]} path - The path segments of the URL.
 * @param {LanguageObject} language - The language object based on the detected language code in the URL.
 * @param {string} defaultLanguageId - The ID of the default language.
 * @returns {Promise<void>} - No return; modifies `request.nextUrl.pathname` directly.
 */
async function rewriteWithLanguage(
  request: NextRequest,
  path: string[],
  language: LanguageObject,
  defaultLanguageId: string,
): Promise<void> {
  const pathWithoutLanguage = path.slice(1);
  let translatedPath = await translatePath(
    pathWithoutLanguage,
    language.id,
    language.id,
  );

  if (translatedPath === undefined) {
    translatedPath = await translatePath(
      pathWithoutLanguage,
      language.id,
      defaultLanguageId,
    );
  }

  if (translatedPath === undefined) {
    translatedPath = await translatePath(pathWithoutLanguage, language.id);
  }

  if (translatedPath !== undefined) {
    const newPath = `/${language.id}/${translatedPath.join("/")}`;
    if (newPath !== request.nextUrl.pathname) {
      request.nextUrl.pathname = newPath;
    }
  } else {
    request.nextUrl.pathname = `/${pathWithoutLanguage.join("/")}`;
  }
}

/**
 * Handles cases where no language is provided in the URL by negotiating the preferred language.
 *
 * @param {NextRequest} request - The incoming request.
 * @param {string[]} path - The path segments of the URL.
 * @param {LanguageObject[]} availableLanguages - A list of available languages supported by the site.
 * @param {string} defaultLanguageId - The ID of the default language.
 * @returns {Promise<void>} - No return; modifies `request.nextUrl.pathname` directly.
 */
async function rewriteMissingLanguage(
  request: NextRequest,
  path: string[],
  availableLanguages: LanguageObject[],
  defaultLanguageId: string,
): Promise<void> {
  const preferredLanguage =
    negotiateClientLanguage(
      availableLanguages.map((language) => language.id),
    ) ?? defaultLanguageId;

  let translatedPath = await translatePath(
    path,
    preferredLanguage,
    defaultLanguageId,
  );

  if (translatedPath === undefined) {
    translatedPath = await translatePath(path, preferredLanguage);
  }

  if (translatedPath !== undefined) {
    const newPath = `/${preferredLanguage}/${translatedPath.join("/")}`;
    request.nextUrl.pathname = newPath;
  } else {
    request.nextUrl.pathname = `/${defaultLanguageId}/${path.join("/")}`;
  }
}
