"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import LinkButton from "src/components/linkButton/LinkButton";
import OfficeSelector from "src/components/officeSelector/OfficeSelector";
import Text from "src/components/text/Text";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";

import EventPostingList from "./EventPostingList";
import styles from "./events.module.css";

interface EventsClientProps {
  section: EventsSection;
  eventPostings: IEventPosting[];
  language: string;
  textColor: string;
}

export default function EventsClient({
  section,
  eventPostings,
  language,
  textColor,
}: EventsClientProps) {
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const t = useTranslations("event_section");

  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  // Filter away old events if oldEvents is unchecked
  const activeEventPostings = eventPostings.filter((event) => {
    const eventDate = event.date ? new Date(event.date) : null;
    if (!eventDate) return true;
    return section.oldEvents || eventDate >= yesterday;
  });

  // Get locations from all new events
  const allLocations = Array.from(
    new Set(
      activeEventPostings.flatMap((event) =>
        event.locations.map((loc) => loc.locationString),
      ),
    ),
  );

  // Get filters and amount of events per filter
  const eventPostingsPerLocation = allLocations.reduce(
    (acc, location) => {
      acc[location] = activeEventPostings.filter((event) =>
        event.locations.some((loc) => loc.locationString === location),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Filter events per location
  const filteredEventPostings = activeEventPostings.filter(
    (event) =>
      locationFilter === null ||
      event.locations.some((loc) => loc.locationString === locationFilter),
  );

  // Sort by date
  const limitedEventPostings = filteredEventPostings.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : Infinity;
    const dateB = b.date ? new Date(b.date).getTime() : Infinity;
    return dateA - dateB;
  });

  return (
    <>
      <div className={styles.titleSection}>
        <Text type={"h2"}>{section.basicTitle}</Text>
        <Text type={"bodyNormal"} className={styles.introText}>
          {section.subtitle}
        </Text>

        {section.hideLocationFilters !== true && (
          <OfficeSelector
            locations={allLocations}
            eventPostingsCount={activeEventPostings.length}
            eventPostingsPerLocation={eventPostingsPerLocation}
            onFilterChange={setLocationFilter}
            textColor={textColor}
          />
        )}

        {section.allEvents && (
          <div className={styles.allEventsButton}>
            <LinkButton
              link={`/${language}/events`}
              linkTitle={t("see_all_events")}
              size="L"
              type="primary"
              background="dark"
              withoutIcon
            />
          </div>
        )}
      </div>

      <div className={styles.eventsSection}>
        <EventPostingList
          eventPostings={limitedEventPostings}
          language={language}
        />
      </div>
    </>
  );
}
