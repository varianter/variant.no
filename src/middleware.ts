import { NextRequest, NextResponse } from "next/server";

import { RedirectDestinationSlugPage } from "studio/lib/interfaces/redirect";
import { REDIRECT_BY_SOURCE_SLUG_QUERY } from "studio/lib/queries/redirect";

import { readBaseUrl } from "./app/env";
import { HTTP_STATUSES } from "./utils/http";

export async function middleware(request: NextRequest) {
  const baseUrlResult = readBaseUrl();
  if (!baseUrlResult.ok) {
    console.error(
      "Failed to run middleware, missing base url:",
      baseUrlResult.error,
    );
    return;
  }
  const baseUrl = baseUrlResult.value;
  const slug = request.nextUrl.pathname;
  const slugQueryParam = slug.replace(/^\/+/, "");
  /*
   fetching redirect data via API route to avoid token leaking to client
   (middleware should run on server, but `experimental_taintUniqueValue` begs to differ...)
  */
  const redirectRes = await fetch(new URL("/api/fetchData", baseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: REDIRECT_BY_SOURCE_SLUG_QUERY,
      params: { slug: slugQueryParam },
    }),
  });
  if (redirectRes.ok) {
    const redirect: RedirectDestinationSlugPage | null =
      await redirectRes.json();
    if (redirect?.destination) {
      return NextResponse.redirect(
        new URL(redirect.destination, request.url),
        HTTP_STATUSES.TEMPORARY_REDIRECT,
      );
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
