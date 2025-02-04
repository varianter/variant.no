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

  return (
    eventPostings && (
      <div className={styles.wrapper}>
        <EventsClient section={section} eventPostings={eventPostings} />
      </div>
    )
  );
}
