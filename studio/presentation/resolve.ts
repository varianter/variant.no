// resolveProductionUrl.ts
import type { SanityDocument } from "sanity";

const remoteUrl = process.env.NEXT_PUBLIC_URL || "https://www.variant.no";
const localUrl = `http://localhost:3000`;

const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET || "";

//function getSlug(slug: any) {
//  if (!slug) return "/";
//  if (slug.current) return slug.current;
//  return "/";
//}

export default function resolveProductionUrl(doc: SanityDocument) {
  console.log(doc); //bare for at doc skal brukes og den slutter å klage
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  //const slug = doc.slug;
  console.log("Resolving preview URL for slug:", secret);
  previewUrl.searchParams.append(`/api/draft`, secret);
  //previewUrl.searchParams.append(`slug`, getSlug(slug));
  return previewUrl.pathname.toString();
}
