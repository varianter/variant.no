import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IEventPostings } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";
import {
  COMPANY_LOCATIONS_QUERY,
  EVENT_POSTINGS_QUERY,
} from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./events.module.css";
import EventsClient from "./EventsClient";

export interface EventsProps {
  language: string;
  section: EventsSection;
}

export default async function Events({ language, section }: EventsProps) {
  const { data: eventPostings } = await loadStudioQuery<IEventPostings | null>(
    EVENT_POSTINGS_QUERY,
    {
      language,
    },
  );

  const { data: companyLocations } = await loadStudioQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    {},
  );

  return (
    eventPostings &&
    companyLocations && (
      <div className={styles.wrapper}>
        <EventsClient
          section={section}
          eventPostings={eventPostings.eventPostingsArray}
          companyLocations={companyLocations}
        />
      </div>
    )
  );
}
