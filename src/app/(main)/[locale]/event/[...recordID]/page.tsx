import React from "react";

import Badge from "src/components/badge/Badge";
import EventRegistration from "src/components/hubspot/eventRegistration/eventRegistration";
import { SanityImage } from "src/components/image/SanityImage";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventRegistrationSection } from "studio/lib/interfaces/pages";
import { EVENT_BY_RECORD_ID_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./event.module.css";

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

  const {
    eventTitle,
    date,
    locations,
    tags,
    _key,
    eventImage,
    subtitle,
    consultants,
    richText,
  } = data.event;

  const section: EventRegistrationSection = {
    _type: "eventRegistration",
    _key: _key,
    recordID: recordID.toString(),
  };

  return (
    <div className={styles.eventPage}>
      <div className={styles.eventInfo}>
        <Badge badgeColor="#3840FF" className={styles.badge}>
          Event
        </Badge>
        <Text type="h1">{eventTitle}</Text>
        <Text type="bodyXl">{subtitle}</Text>
        <div className={styles.eventDetails}>
          <Text type="labelLarge">{date}</Text>
          {locations &&
            locations.map((location, index) => (
              <Text type="labelLarge" key={index}>
                {location.locationString}
              </Text>
            ))}
        </div>
      </div>
      {eventImage && (
        <div className={styles.eventImage}>
          <SanityImage image={eventImage} objectFit="cover" />
        </div>
      )}

      <div className={styles.description}>
        <div className={styles.tags}>
          {tags &&
            tags.map((tag, index) => (
              <Badge key={index} badgeColor="#FFFFFF" borderColor="#000000">
                <Text type="labelLarge">{tag.tag}</Text>
              </Badge>
            ))}
          <Text type="labelLarge">[</Text>
          {consultants &&
            consultants.map((consultant, index) => (
              <Text type="labelLarge" key={index}>
                {consultant.employeeFirstName}
              </Text>
            ))}
          <Text type="labelLarge">]</Text>
        </div>
        {richText && <RichText value={richText} />}
      </div>
      <EventRegistration section={section} />
    </div>
  );
}
