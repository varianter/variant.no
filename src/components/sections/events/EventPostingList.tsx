"use client";

import { useEffect, useMemo, useState } from "react";

import EventPosting from "src/components/eventPosting/EventPosting";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./events.module.css";

interface EventPostingListProps {
  eventPostings: IEventPosting[];
  companyLocations: CompanyLocation[];
}

export default function EventPostingList({
  eventPostings,
  companyLocations,
}: EventPostingListProps) {
  const [locationFilter] = useState<CompanyLocation | null>(null);
  const [filteredEventPostings, setFilteredEventPostings] =
    useState<IEventPosting[]>(eventPostings);

  const eventPostingLocations = useMemo(
    () =>
      Object.fromEntries(
        eventPostings.map((eventPosting) => [
          eventPosting._key,
          eventPosting.locations.map(
            (location) => location.companyLocationName,
          ),
        ]),
      ),
    [eventPostings],
  );

  const eventPostingsPerLocation = Object.fromEntries(
    companyLocations.map((location) => [location.companyLocationName, 0]),
  );
  for (const eventPosting of eventPostings) {
    for (const location of eventPosting.locations) {
      eventPostingsPerLocation[location.companyLocationName]++;
    }
  }

  useEffect(() => {
    if (locationFilter === null) {
      setFilteredEventPostings(eventPostings);
    } else {
      setFilteredEventPostings(
        eventPostings?.filter((eventPosting) =>
          eventPostingLocations[eventPosting._key].includes(
            locationFilter.companyLocationName,
          ),
        ),
      );
    }
  }, [locationFilter, eventPostings, eventPostingLocations]);

  return (
    <div className={styles.eventPostings}>
      {filteredEventPostings?.map((eventPosting: IEventPosting) => (
        <EventPosting
          eventPosting={eventPosting}
          key={eventPosting._key}
          showLocations={locationFilter == null}
        />
      ))}
    </div>
  );
}
