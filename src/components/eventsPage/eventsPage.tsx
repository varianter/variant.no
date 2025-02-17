import EventPosting from "src/components/eventPosting/EventPosting";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import EventsHeader from "./eventsHeader";
import styles from "./eventsPage.module.css";

export default async function EventsPage({
  params,
  eventPostings,
}: {
  params: { locale: string };
  eventPostings: { eventPostings: IEventPosting[] };
}) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const filteredEventPostings = eventPostings.eventPostings.filter((event) => {
    const eventDate = event.date ? new Date(event.date) : null;
    if (!eventDate) return true;
    return eventDate >= yesterday;
  });

  const limitedEventPostings = filteredEventPostings.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : Infinity;
    const dateB = b.date ? new Date(b.date).getTime() : Infinity;
    return dateA - dateB;
  });

  return (
    <div className={styles.eventSection}>
      <EventsHeader />

      <div className={styles.wrapper}>
        {limitedEventPostings.map((event: IEventPosting) => (
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
