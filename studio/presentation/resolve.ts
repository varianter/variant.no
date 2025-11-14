// resolveProductionUrl.ts
import type { SanityDocument, Slug } from "sanity";

const remoteUrl = process.env.NEXT_PUBLIC_URL || "https://www.variant.no";
const localUrl = `http://localhost:3000`;

const secret = process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_SECRET || "";

interface InternationalizedSlug {
  _key: string;
  value: string;
}

function getSlug(
  slug: Slug | string | InternationalizedSlug[] | undefined | null,
  locale?: string,
): string {
  if (!slug) return "";

  if (Array.isArray(slug)) {
    const localizedSlug = slug.find((s) => s._key === locale);
    return localizedSlug?.value || slug[0]?.value || "";
  }

  if (typeof slug === "object" && "current" in slug && slug.current) {
    return slug.current;
  }

  if (typeof slug === "string") return slug;

  return "";
}

function getLanguage(doc: SanityDocument): string {
  if (doc.language && typeof doc.language === "string") return doc.language;
  if (doc._lang && typeof doc._lang === "string") return doc._lang;
  // Default to 'no' if no language is specified
  return "no";
}

export default function resolveProductionUrl(doc: SanityDocument) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = "/api/draft";
  const isDraft = doc._id.startsWith("drafts.");
  if (!isDraft) {
    previewUrl.pathname = "/api/disable-draft";
  }
  previewUrl.searchParams.append("secret", secret);
  const language = getLanguage(doc);
  const slug = getSlug(
    doc.slug as Slug | string | InternationalizedSlug[] | undefined,
    language,
  );
  if (slug) {
    previewUrl.searchParams.append("slug", slug);
  }
  previewUrl.searchParams.append("locale", language);
  return previewUrl.toString();
}
