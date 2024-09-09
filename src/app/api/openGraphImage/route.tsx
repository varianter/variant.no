import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import OpenGraphImage from "./OpenGraphImage";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title") ?? "Variant";
  const description = searchParams.get("description");
  return new ImageResponse(
    <OpenGraphImage title={title} description={description ?? undefined} />,
    {
      width: 1200,
      height: 630,
    },
  );
}
