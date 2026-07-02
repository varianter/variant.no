"use client";

import { useState } from "react";

import EventPosting from "src/components/eventPosting/EventPosting";
import styles from "src/components/eventsPage/eventsPage.module.css";
import YearSelector from "src/components/yearSelector/YearSelector";
import { type IEventPosting } from "studio/lib/interfaces/eventPosting";

export default function EventPostingListWithYearFilter({
  eventPostings,
  language,
}: {
  eventPostings: IEventPosting[];
  language: string;
}) {
  const eventPostingsYears = [
    ...new Set(
      eventPostings
        .filter((event) => event.date)
        .map((event) => event.date!.slice(0, 4)),
    ),
  ];
  const preselectedYear = eventPostingsYears[0];

  const [yearFilter, setYearFilter] = useState<string | null>(preselectedYear);

  const filteredEventPostings = eventPostings.filter(
    (event) => yearFilter === null || event.date.startsWith(yearFilter),
  );

  return (
    <>
      <YearSelector
        years={eventPostingsYears}
        preselectedYear={preselectedYear}
        onFilterChange={setYearFilter}
      />

      <div className={styles.wrapper}>
        {filteredEventPostings.map((event: IEventPosting) => (
          <EventPosting
            eventPosting={event}
            key={event._key}
            language={language}
          />
        ))}
      </div>
    </>
  );
}
