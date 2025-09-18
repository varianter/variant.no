import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EVENT_BY_KEY_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import {
  backgroundStyle,
  blueBackgroundStyle,
  dot,
  eventInfoContainerStyle,
  eventInfoStyle,
  imgStyle,
  titleStyle,
} from "./style";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "no";
  const key = searchParams.get("key") || "";

  const dimensions = {
    width: 1200,
    height: 630,
  };

  const fontData = await readFile(
    join(process.cwd(), "public/_assets/Britti-Sans-Regular.otf"),
  );

  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: key,
    language: language,
  });

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const { eventTitle, date, time, locations } = data.event;
  return new ImageResponse(
    (
      <div style={backgroundStyle}>
        <div style={blueBackgroundStyle}>
          <h1 style={titleStyle}>{eventTitle}</h1>
          {/* {subtitle && <p> {subtitle} </p>} */}
          <div style={eventInfoContainerStyle}>
            <p style={eventInfoStyle}>
              {new Date(date).toLocaleDateString("nb-NO", options)}
            </p>
            <img
              style={dot}
              alt="text seperator dot"
              src={`${new URL(request.url).origin}/_assets/dot-white.svg`}
            />
            <p style={eventInfoStyle}>{time}</p>
            <img
              style={dot}
              alt="text seperator dot"
              src={`${new URL(request.url).origin}/_assets/dot-white.svg`}
            />
            {locations.map((location, index) => (
              <p key={index} style={eventInfoStyle}>
                {location.locationString}
              </p>
            ))}
          </div>
          <img
            style={imgStyle}
            alt="Variant logo"
            src={`${new URL(request.url).origin}/_assets/variant-logo-white.svg`}
          />
        </div>
      </div>
    ),
    {
      ...dimensions,
      fonts: [
        {
          name: "Britti Sans Regular",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
