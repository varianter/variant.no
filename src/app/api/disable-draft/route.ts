import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { absoluteUrlFromNextRequest } from "src/utils/url";

export async function GET(request: NextRequest) {
  (await draftMode()).disable();
  return NextResponse.redirect(absoluteUrlFromNextRequest(request, "/"));
}
