import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { absoluteUrlFromNextRequest } from "src/utils/url";

export function GET(request: NextRequest) {
  draftMode().disable();
  return NextResponse.redirect(absoluteUrlFromNextRequest(request, "/"));
}
