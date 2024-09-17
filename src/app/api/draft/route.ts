import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { absoluteUrlFromNextRequest } from "src/utils/url";
import { client } from "studio/lib/client";
import { token } from "studio/lib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: NextRequest) {
  try {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(
      clientWithToken,
      request.url,
    );

    if (!isValid) {
      return new Response("Invalid secret", { status: 401 });
    }

    draftMode().enable();

    return NextResponse.redirect(
      absoluteUrlFromNextRequest(request, redirectTo),
    );
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
