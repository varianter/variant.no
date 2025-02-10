"use client";

import { useEffect, useMemo, useState } from "react";

import EventPosting from "src/components/eventPosting/EventPosting";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./events.module.css";

interface EventPostingListProps {
  eventPostings: IEventPosting[];
}

export default function EventPostingList({
  eventPostings,
}: EventPostingListProps) {
  const [locationFilter] = useState<string | null>(null);
  const [filteredEventPostings, setFilteredEventPostings] =
    useState<IEventPosting[]>(eventPostings);

  const eventPostingLocations = useMemo(
    () =>
      Object.fromEntries(
        eventPostings.map((eventPosting) => [
          eventPosting._key,
          eventPosting.locations ?? [],
        ]),
      ),
    [eventPostings],
  );

  const eventPostingsPerLocation = Object.fromEntries(
    eventPostings.flatMap(
      (eventPosting) =>
        eventPosting.locations?.map((location) => [
          location.locationObject,
          0,
        ]) ?? [],
    ),
  );

  for (const eventPosting of eventPostings) {
    for (const location of eventPosting.locations ?? []) {
      const locationName = location.locationObject;
      if (locationName) {
        eventPostingsPerLocation[locationName] =
          (eventPostingsPerLocation[locationName] || 0) + 1;
      }
    }
  }

  useEffect(() => {
    if (locationFilter === null) {
      setFilteredEventPostings(eventPostings);
    } else {
      setFilteredEventPostings(
        eventPostings.filter((eventPosting) =>
          eventPostingLocations[eventPosting._key].includes(locationFilter),
        ),
      );
    }
  }, [locationFilter, eventPostings, eventPostingLocations]);

  return (
    <div className={styles.eventPostings}>
      {filteredEventPostings.map((eventPosting) => (
        <EventPosting
          eventPosting={eventPosting}
          key={eventPosting._key}
          showLocations={locationFilter == null}
        />
      ))}
    </div>
  );
}
