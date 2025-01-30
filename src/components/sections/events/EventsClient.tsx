"use client";

import { useState } from "react";

import OfficeSelector from "src/components/officeSelector/OfficeSelector";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";

import EventPostingList from "./EventPostingList";
import styles from "./events.module.css";

interface EventsClientProps {
  section: EventsSection;
  eventPostings: IEventPosting[];
  companyLocations: CompanyLocation[];
}

export default function EventsClient({
  section,
  eventPostings,
  companyLocations,
}: EventsClientProps) {
  const [locationFilter, setLocationFilter] = useState<CompanyLocation | null>(
    null,
  );

  // Count events per location
  const eventPostingsPerLocation = companyLocations.reduce(
    (acc, location) => {
      acc[location.companyLocationName] = eventPostings.filter((eventPosting) =>
        eventPosting.locations.some(
          (loc) => loc.companyLocationName === location.companyLocationName,
        ),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Filter events by locations
  const filteredEventPostings =
    locationFilter === null
      ? eventPostings
      : eventPostings.filter((eventPosting) =>
          eventPosting.locations.some(
            (location) =>
              location.companyLocationName ===
              locationFilter.companyLocationName,
          ),
        );

  // Function to only show 3 events
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
          companyLocations={companyLocations}
          eventPostingsCount={eventPostings.length}
          eventPostingsPerLocation={eventPostingsPerLocation}
          onFilterChange={(location) => setLocationFilter(location)}
        />
      </div>

      <div className={styles.eventsSection}>
        <EventPostingList
          eventPostings={limitedEventPostings}
          companyLocations={companyLocations}
        />
      </div>
    </>
  );
}
