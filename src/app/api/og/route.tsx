import { ImageResponse } from "next/og";

import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EVENT_BY_KEY_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "no";
  const key = searchParams.get("key") || "";

  const dimensions = {
    width: 1200,
    height: 630,
  };

  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: key,
    language: language,
  });

  const { eventTitle } = data.event;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontSize: 60,
          fontWeight: 700,
          color: "#000000",
        }}
      >
        <h1 style={{ margin: 0, textAlign: "left", padding: "0 40px" }}>
          {eventTitle}
        </h1>
      </div>
    ),
    dimensions,
  );
}
