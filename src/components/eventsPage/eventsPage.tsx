import { getTranslations } from "next-intl/server";

import EventPosting from "src/components/eventPosting/EventPosting";
import EventPostingListWithYearFilter from "src/components/sections/events/EventPostingListWithYearFilter";
import Text from "src/components/text/Text";
import { type IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./eventsPage.module.css";

const sortByDateAsc = (a: IEventPosting, b: IEventPosting) => {
  const dateA = a.date ? new Date(a.date).getTime() : Infinity;
  const dateB = b.date ? new Date(b.date).getTime() : Infinity;
  return dateA - dateB;
};

export default async function EventsPage({
  params,
  eventPostings,
}: {
  params: { locale: string };
  eventPostings: { eventPostings: IEventPosting[] };
}) {
  const t = await getTranslations("event_section");
  const allEventsId = "all-events-id";
  const futureEventsId = "future-events-id";
  const pastEventsId = "past-events-id";
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  const futureEventPostings = eventPostings.eventPostings.filter((event) => {
    const eventDate = event.date ? new Date(event.date) : null;
    if (!eventDate) return true;
    return eventDate >= yesterday;
  });

  const pastEventPostings = eventPostings.eventPostings.filter((event) => {
    const eventDate = event.date ? new Date(event.date) : null;
    if (!eventDate) return true;
    return eventDate < yesterday;
  });

  const sortedFutureEventPostings = futureEventPostings.sort(sortByDateAsc);
  const sortedPastEventPostings = pastEventPostings
    .sort(sortByDateAsc)
    .reverse();

  return (
    <>
      <section className={styles.eventSection} aria-labelledby={allEventsId}>
        <div className="visually-hidden">
          <Text type="titleXL" id={allEventsId}>
            {t("all_events")}
          </Text>
        </div>

        {sortedFutureEventPostings.length > 0 && (
          <section aria-labelledby={futureEventsId}>
            <Text type="titleL" id={futureEventsId}>
              {t("future_events")}
            </Text>

            <div className={styles.wrapper}>
              {sortedFutureEventPostings.map((event: IEventPosting) => (
                <EventPosting
                  eventPosting={event}
                  key={event._key}
                  language={params.locale}
                />
              ))}
            </div>
          </section>
        )}

        {sortedPastEventPostings.length > 0 && (
          <section
            className={styles.eventSection}
            aria-labelledby={pastEventsId}
          >
            <Text type="titleL" id={pastEventsId}>
              {t("past_events")}
            </Text>

            <EventPostingListWithYearFilter
              eventPostings={sortedPastEventPostings}
              language={params.locale}
            />
          </section>
        )}
      </section>
    </>
  );
}
