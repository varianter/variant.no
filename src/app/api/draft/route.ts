export const dynamic = "force-dynamic";

import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  try {
    if (!secret || secret !== process.env.SANITY_PREVIEW_SECRET) {
      return new Response("Invalid secret", { status: 401 });
    }

    (await draftMode()).enable();

    return NextResponse.redirect(new URL(request.url, request.nextUrl.origin));
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
