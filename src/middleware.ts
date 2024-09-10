import { NextRequest, NextResponse } from "next/server";
import { client } from "../studio/lib/client";
import { RedirectSparsePage } from "../studio/lib/payloads/redirect";

export async function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname;
  const redirect = await client.fetch<RedirectSparsePage | null>(
    `*[_type == "redirect" && source.current == "${slug}"][0]{
        "destination":destination.current
      }`,
  );
  if (redirect !== null) {
    return NextResponse.redirect(
      new URL(redirect.destination, request.url),
      307,
    );
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
