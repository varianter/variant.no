import React from "react";

import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EVENT_BY_RECORD_ID_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

interface EventPageProps {
  params: {
    eventID: string[];
    locale: string;
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const recordID = parseInt(params.eventID[0]);

  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_RECORD_ID_QUERY, {
    recordID: recordID,
    language: params.locale,
  });

  const { eventTitle, eventDescription, date, locations, tags } = data.event;

  return (
    <div>
      <h1>{eventTitle}</h1>
      <p>{eventDescription}</p>
      <p>{date}</p>
      {locations &&
        locations.map((location, index) => (
          <p key={index}>{location.locationString}</p>
        ))}
      {tags &&
        tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag.tag}
          </span>
        ))}
    </div>
  );
}
