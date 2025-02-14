import EventPosting from "src/components/eventPosting/EventPosting";
import Text from "src/components/text/Text";
import {
  IEventPosting,
  IEventPostings,
} from "studio/lib/interfaces/eventPosting";

import styles from "./eventsPage.module.css";

export default async function EventsPage({
  params,
  eventPostings,
}: {
  params: { locale: string };
  eventPostings: { eventPostings: IEventPostings[] };
}) {
  return (
    <div className={styles.eventSection}>
      <Text type="h1">Alle arrangementer</Text>

      <div className={styles.wrapper}>
        {eventPostings.map((event: IEventPosting) => (
          <EventPosting
            eventPosting={event}
            key={event._key}
            showLocations={1}
            language={params.locale}
          />
        ))}
      </div>
    </div>
  );
}
