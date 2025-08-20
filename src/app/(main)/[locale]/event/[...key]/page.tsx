import { Metadata } from "next";
import React from "react";

import Badge from "src/components/badge/Badge";
import EventRegistration from "src/components/hubspot/eventRegistration/eventRegistration";
import { SanityImage } from "src/components/image/SanityImage";
import { RichText } from "src/components/richText/RichText";
import Events from "src/components/sections/events/Events";
import Text from "src/components/text/Text";
import EventSpeakers from "src/components/utils/eventSpeakers/eventSpeakers";
import { generateMetadataFromSeo } from "src/utils/seo";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EventsSection } from "studio/lib/interfaces/pages";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { EVENT_BY_KEY_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./event.module.css";

interface EventPageProps {
  params: {
    key: string;
    locale: "en" | "no";
  };
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: params.key.toString(),
    language: params.locale,
  });

  const { eventTitle, _key, seo } = data.event;

  const baseMetadata = await generateMetadataFromSeo(
    {
      title: seo?.title || eventTitle,
      description: seo?.description,
      imageUrl: `/api/og?language=${params.locale}&key=${_key}`,
      keywords: seo?.keywords,
    },
    params.locale,
  );

  // Override the openGraph image to prevent Next.js optimization
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/og?language=${params.locale}&key=${_key}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// TODO: Create as specialPage
export default async function EventPage({ params }: EventPageProps) {
  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: params.key.toString(),
    language: params.locale,
  });

  const { data: events } = await loadStudioQuery<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale });

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
    recordID,
    time,
  } = data.event;

  const consultantsFirstNames =
    consultants?.map((n) => n.employeeFirstName) ?? [];

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
          <Text type="labelLarge">{time}</Text>
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
          {consultantsFirstNames && (
            <EventSpeakers
              textType="labelLarge"
              consultantsFirstNames={consultantsFirstNames}
            />
          )}
        </div>
        {richText && <RichText value={richText} />}
      </div>
      {recordID && (
        <EventRegistration
          section={{
            _type: "eventRegistration",
            _key: _key,
            recordID: recordID.toString(),
            date: date,
          }}
          language={params.locale}
        />
      )}
      <Events language={params.locale} section={events as EventsSection} />
    </div>
  );
}
