export const dynamic = "force-dynamic";

import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const slug = request.nextUrl.searchParams.get("slug");
  const locale = request.nextUrl.searchParams.get("locale");

  try {
    if (!secret || secret !== process.env.SANITY_PREVIEW_SECRET) {
      return new Response("Invalid secret", { status: 401 });
    }

    (await draftMode()).enable();

    const previewLocale = locale || "no";
    const previewSlug = slug || "";
    const path =
      previewSlug === "/" || previewSlug === ""
        ? `/${previewLocale}`
        : `/${previewLocale}/${previewSlug}`;

    const url = new URL(path, request.nextUrl.origin);
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
