import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./events.module.css";
import EventsClient from "./EventsClient";

export interface EventsProps {
  language: string;
  section: EventsSection;
}

export default async function Events({ language, section }: EventsProps) {
  // Check if eventPostingsArray in section has events
  const hasLocalEvents =
    section.eventPostingsArray && section.eventPostingsArray.length > 0;

  let eventPostings: IEventPosting[] = [];

  if (hasLocalEvents) {
    eventPostings = section.eventPostingsArray.map((event) => ({
      ...event,
    }));
  } else {
    const { data } = await loadStudioQuery<{
      eventPostingsArray: IEventPosting[];
    }>(EVENT_POSTINGS_QUERY, { language });
    eventPostings = data?.eventPostingsArray ?? [];
  }

  const getContrastTextColor = (hex: string) => {
    if (!hex) return "#ffffff";

    // Remove #
    const color = hex.startsWith("#") ? hex.slice(1) : hex;

    // Convert hex to RGB (0-255)
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const rNormalized = r / 255;
    const gNormalized = g / 255;
    const bNormalized = b / 255;

    // WCAG-formel for luminance
    const luminance = (c: number) =>
      c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

    const L =
      0.2126 * luminance(rNormalized) +
      0.7152 * luminance(gNormalized) +
      0.0722 * luminance(bNormalized);

    const contrastBlack = (L + 0.05) / 0.05;
    const contrastWhite = 1.05 / (L + 0.05);

    return contrastBlack > contrastWhite ? "#000" : "#fff";
  };

  const backgroundColor = section.eventSectionColor;
  const textColor = backgroundColor
    ? getContrastTextColor(backgroundColor)
    : "#ffffff";

  return (
    eventPostings && (
      <div
        className={styles.wrapper}
        {...(backgroundColor
          ? { style: { backgroundColor, color: textColor } }
          : {})}
      >
        <EventsClient
          section={section}
          eventPostings={eventPostings}
          language={language}
          textColor={textColor}
        />
      </div>
    )
  );
}
