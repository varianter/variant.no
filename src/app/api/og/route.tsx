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

  const eventInfoStyling = {
    fontSize: "38px",
    color: "#FFFFFF",
  };

  const { eventTitle, date, locations } = data.event;
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
          padding: "1rem",
          backgroundColor: "#FFFFFF",
          fontSize: 60,
          fontWeight: 700,
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6rem",
            width: "100%",
            height: "100%",
            backgroundColor: "#3840FF",
            borderRadius: "48px 48px 200px 48px",
          }}
        >
          <h1
            style={{
              margin: 0,
              textAlign: "left",
              padding: "0 40px",
              fontSize: "86px",
              fontFamily: "BrittiSansVariable",
            }}
          >
            {eventTitle}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "0 40px",
              width: "100%",
              height: "100%",
            }}
          >
            <p style={eventInfoStyling}>{date}</p>
            <p style={eventInfoStyling}>TID</p>
            {locations.map((location, index) => (
              <p key={index} style={eventInfoStyling}>
                {location.locationString}
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
    dimensions,
  );
}
