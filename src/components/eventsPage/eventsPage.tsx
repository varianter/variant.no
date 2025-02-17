import EventPosting from "src/components/eventPosting/EventPosting";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./eventsPage.module.css";
import EventsHeader from "./eventsHeader";

export default async function EventsPage({
  params,
  eventPostings,
}: {
  params: { locale: string };
  eventPostings: { eventPostings: IEventPosting[] };
}) {
  return (
    <div className={styles.eventSection}>
      <EventsHeader locale={params.locale} />

      <div className={styles.wrapper}>
        {eventPostings.eventPostings.map((event: IEventPosting) => (
          <EventPosting
            eventPosting={event}
            key={event._key}
            showLocations={true}
            language={params.locale}
          />
        ))}
      </div>
    </div>
  );
}
