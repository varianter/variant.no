"use client";

import { useState } from "react";

import OfficeSelector from "src/components/officeSelector/OfficeSelector";
import Text from "src/components/text/Text";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";

import EventPostingList from "./EventPostingList";
import styles from "./events.module.css";

interface EventsClientProps {
  section: EventsSection;
  eventPostings: IEventPosting[];
}

export default function EventsClient({
  section,
  eventPostings,
}: EventsClientProps) {
  const [locationFilter, setLocationFilter] = useState<string | null>(null);

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
    .filter((event) => new Date(event.date) >= yesterday) // Filter away old events
    .filter(
      (event) =>
        locationFilter === null ||
        event.locations.some((loc) => loc.locationString === locationFilter),
    );

  const limitedEventPostings = filteredEventPostings.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

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
        />
      </div>

      <div className={styles.eventsSection}>
        <EventPostingList eventPostings={limitedEventPostings} />
      </div>
    </>
  );
}
