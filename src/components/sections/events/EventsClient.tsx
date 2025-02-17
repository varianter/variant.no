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

  const allLocations = Array.from(
    new Set(
      eventPostings.flatMap((event) =>
        event.locations.map((loc) => loc.locationString),
      ),
    ),
  );

  const eventPostingsPerLocation = allLocations.reduce(
    (acc, location) => {
      acc[location] = eventPostings.filter((event) =>
        event.locations.some((loc) => loc.locationString === location),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const filteredEventPostings = eventPostings
    .filter((event) => {
      const eventDate = event.date ? new Date(event.date) : null;
      if (!eventDate) return true;
      return section.oldEvents || eventDate >= yesterday;
    })
    .filter(
      (event) =>
        locationFilter === null ||
        event.locations.some((loc) => loc.locationString === locationFilter),
    );

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

        <OfficeSelector
          locations={allLocations}
          eventPostingsCount={eventPostings.length}
          eventPostingsPerLocation={eventPostingsPerLocation}
          onFilterChange={setLocationFilter}
          textColor={textColor}
        />

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
