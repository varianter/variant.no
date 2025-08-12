import React from "react";

import EventRegistration from "src/components/hubspot/eventRegistration/eventRegistration";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";
import { EVENT_BY_RECORD_ID_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

interface EventPageProps {
  params: {
    recordID: string;
    locale: string;
  };
}

// TODO: Create as specialPage

export default async function EventPage({ params }: EventPageProps) {
  const recordID = parseInt(params.recordID);

  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_RECORD_ID_QUERY, {
    recordID: recordID,
    language: params.locale,
  });

  const { eventTitle, eventDescription, date, locations, tags, _key } =
    data.event;

  const section: EventRegistrationSection = {
    _type: "eventRegistration",
    _key: _key,
    recordID: recordID.toString(),
  };

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

      <EventRegistration section={section} />
    </div>
  );
}
