import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const locale = request.nextUrl.searchParams.get("locale");
  (await draftMode()).disable();

  const previewLocale = locale || "no";
  const previewSlug = slug || "";
  const path =
    previewSlug === "/" || previewSlug === ""
      ? `/${previewLocale}`
      : `/${previewLocale}/${previewSlug}`;

  const url = new URL(path, request.nextUrl.origin);
  return NextResponse.redirect(url);
}
